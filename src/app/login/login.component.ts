import { Component, OnInit } from '@angular/core';
import { PeticionesService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[PeticionesService]
})
export class LoginComponent implements OnInit {


  public email: string;
  public password: string;
  public msg_error:string;
  public cargando:number;

  /*validacion*/
  public info_user:any;
  public acceso:boolean;
  public usuario_logeado:any;



  constructor(
    private _peticionesService:PeticionesService
  )
  {
    this.acceso=false;
    this.msg_error='';

    /*this.email='';
    this.password='';
    this.cargando=0;
    this.usuario_logeado=[ {name: "",mail:"",image:"" } ];*/
  }

  ngOnInit(): void {
    this.acceso=false;
    this.usuario_logeado=[ {name: "",mail:"",image:"" } ];
    this.validar_token();
  }


  login(){
      //console.log(this.email);
      //console.log(this.password);
      this.cargando=1;

      if(this.email!="" && this.password!="")
      {
        this.msg_error='';
        //request
        this._peticionesService.Auth(this.email,this.password).subscribe(
          resultado=>{
            this.info_user=resultado||[];
            //console.log('Info',this.info_user);

            var count = Object.keys(this.info_user).length;

            //si se obtiene el ingreso completo
            if(count==1)
            {
              //validar el uso de local storage
              if(typeof(Storage)!=="undefined")
              {
                 this.acceso=true;
                 localStorage.setItem("token",JSON.stringify(this.info_user['ResponseLogin.item']['token']['token']));
                 //this._router.navigate(['./']);
                  window.location.reload(true)
              }
            }

          },
          error=>{
            //console.log(<any>error);
            //Efecto de Carga
            setTimeout(() => {
              this.cargando=0;
              this.msg_error=' Datos Invalidos ';
            }, 1000);
          }
        );
      }
      else{

          this.msg_error='Capture los campos Porfavor ';
        //Efecto de Carga
        setTimeout(() => {
          this.cargando=0;
        }, 1000);
      }

    }//login



    validar_token()
    {
      this.acceso=false;

      if(typeof(Storage)!=="undefined")
      {
        //console.log(localStorage.getItem("usuario"));
        if(localStorage.getItem("token"))
        {
          var KeyToken=JSON.parse(localStorage.getItem("token"));

            //console.log(usr_json.mail);
            if(KeyToken!="")
            {
              console.log(KeyToken);
              this.acceso=true;
            }//validar mail vacio
          }//localstorage validacion
        }//validar que permita el localstorage
    }


}
