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


  public promociones:[];
  public cargando:boolean;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _peticionesService:PeticionesService
    )
    {
      this.cargando=true;
    }

    ngOnInit(): void {
      this.obtener_promociones();
    }

    obtener_promociones()
    {
        this.cargando=true;
      if(typeof(Storage)!=="undefined")
      {
        //console.log(localStorage.getItem("usuario"));
        if(localStorage.getItem("token"))
        {
          var KeyToken=JSON.parse(localStorage.getItem("token"));
          //console.log(KeyToken);

            this._peticionesService.getPromociones(KeyToken).subscribe(
              resultado=>{

                //Efecto de Carga
                setTimeout(() => {
                  this.cargando=false;
                }, 1000);

                //this.promociones=resultado||[];
                this.promociones=resultado['ResponseEnablePromotion.item']['promotions']['promotions']||[];
                console.log(this.promociones);

              },
              error=>{
                //console.log(<any>error);
              }
            );
          }//localstorage validacion
        }//validar que permita el localstorage

    }//metodo listar

}
