import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PeticionesService } from './peticiones.service';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css'],
  providers:[PeticionesService]
})
export class PublicidadComponent implements OnInit {

  public tipo:string;
  public publicidad:[];
  public cargando:boolean;
  public pagina:number;
  public pagina_actual:number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _peticionesService:PeticionesService
   ){
     this.tipo="nacional";
     this.pagina=0;
     this.pagina_actual=1;
     this.cargando=false;
    }

    ngOnInit(): void {
      this.filtar_publicidad();
    }

    filtar_publicidad()
    {
      this.tipo=this.tipo||"nacional";

      //console.log('filtar publicidad = '+this.tipo);
      //this._router.navigate(['./Publicidad/'+this.tipo]);
      this.cargando=true;

      //request
      this._peticionesService.getPublicidad(this.pagina,this.tipo).subscribe(
        resultado=>{
          //Efecto de Carga
          setTimeout(() => {
            this.cargando=false;
          }, 1000);

          this.publicidad=resultado||[];
          console.log(this.publicidad);
        },
        error=>{
          //console.log(<any>error);
        }
      );
    }//metodo listar



    siguiente(){
      console.log(this.publicidad.length);

      if(this.publicidad.length>=20){
        this.pagina++;
        this.pagina_actual++;
        console.log(this.pagina_actual);
        this.filtar_publicidad();
      }
    }


    anterior()
    {
      if(this.pagina>0)
      {
        this.pagina--;
        this.pagina_actual--;
        this.filtar_publicidad();
      }
    }



}
