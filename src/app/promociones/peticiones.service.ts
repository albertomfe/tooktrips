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
    this.url="";
  }

   //autentificacion
   getPromociones(token):Observable<any>{

     //Establecemos cabeceras
     let headers = {
       "Accept": "application/json",
       "Content-Type":"application/json",
       "SPTOKEN":token
     };
      console.log(token);

      var param='';

      this.url="https://service-place-api.azurewebsites.net/promotion/available/";
      return this._http.get(this.url,{headers:headers});
   }



}
