import { Component, OnInit } from '@angular/core';
import { PeticionesService } from './peticiones.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css'],
  providers:[PeticionesService]
})
export class RecoveryComponent implements OnInit {

  public email: string;
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
  }

  ngOnInit(): void {
    this.acceso=false;
    this.usuario_logeado=[ {name: "",mail:"",image:"" } ];
    this.validar_token();
  }

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


  recobrar()
  {
    console.log('recobrar');

  }


}
