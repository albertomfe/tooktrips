/*modulos apra hacer peticiones externas y modificar cabeceras*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


/*const HttpUploadOptions = {
  headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
}*/
@Injectable()
export class PeticionesService{

  public url:string;


  constructor(
    public _http:HttpClient
  )
  {
    this.url="https://reqres.in";
  }


   getPublicidad(tipo):Observable<any>{

     //Establecemos cabeceras
      let headers = { "Accept": "application/json" };

      let parametros=new FormData();
      parametros.append('user', 'Imacop');
      parametros.append('password', '25041988');
      parametros.append('officeId','1');
      parametros.append('typePublicity', ''+tipo+'');

      this.url="https://sistema.imacoponline.com/API/ApiPublicidad";
      return this._http.post(this.url,parametros,{headers:headers});
   }
   
}
