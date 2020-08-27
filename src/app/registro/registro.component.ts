import { Component, OnInit } from '@angular/core';
import { PeticionesService } from './peticiones.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[PeticionesService]
})
export class RegistroComponent implements OnInit {

  public cargando:number;
  public msg_error:string;
  public msg_success:string;
  public result:any;

  /*campos*/
  public nickname:string;
  public password:string;
  public firstName:string;
  public lastName:string;
  public gender:string;
  public yearOld:number;
  public country:string;
  public city:string;
  public address:string;

  constructor(  private _peticionesService:PeticionesService)
   { }

  ngOnInit(): void {
    this.msg_error='';
    this.msg_success='';
    this.password="";
    this.nickname="";
    this.firstName="";
    this.lastName="";
    this.gender="";
    this.result=[];
  }


  Registrar()
  {
      //console.log(this.email);
      //console.log(this.password);
      this.cargando=1;
      this.msg_success='';
      this.msg_error='';
      if(this.nickname!="" && this.password!="")
      {
        this.msg_error='';
        //request
        this._peticionesService.Register(this.nickname,this.password,this.gender,this.firstName,this.lastName,this.yearOld,this.country,this.city,this.address).subscribe(
          resultado=>{

            this.result=resultado||[];
            console.log(this.result);
            this.cargando=0;
            this.msg_success=' Tu registro se ha creado correctamente ';
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

    }//Registro



}
