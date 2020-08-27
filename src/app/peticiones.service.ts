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
   CloseSession(token):Observable<any>{

     //Establecemos cabeceras
      let headers = {
        "Accept": "application/json",
        "Content-Type":"application/json",
        "SPTOKEN":token
      };

      var param='';

      this.url="https://service-place-api.azurewebsites.net/session/logout";
      return this._http.post(this.url,param,{headers:headers});
   }


}
