import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PeticionesService } from './peticiones.service';


@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css'],
  providers:[PeticionesService]
})
export class PromocionesComponent implements OnInit {

  public tipo:string;
  public publicidad:[];
  private cargando:boolean;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _peticionesService:PeticionesService
    )
    {
      this.tipo="nacional";
      this.cargando=true;
    }

    ngOnInit(): void {
      //this.filtar_publicidad();
    }

    filtar_publicidad()
    {
      this.tipo=this.tipo||"nacional";

      //console.log('filtar publicidad = '+this.tipo);
      //this._router.navigate(['./Publicidad/'+this.tipo]);
      this.cargando=true;

      //request
      this._peticionesService.getPublicidad(this.tipo).subscribe(
        resultado=>{

          //Efecto de Carga
          /*setTimeout(() => {
            this.cargando=false;
          }, 1000);*/

          this.publicidad=resultado||[];

        },
        error=>{
          //console.log(<any>error);
        }
      );
    }//metodo listar

}
