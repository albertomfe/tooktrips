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


   getPublicidad(pagina,tipo):Observable<any>{
      this.url="https://sistema.imacoponline.com/API_OLD/get_publicidad_viejo.php?pagina="+pagina+"&tipo="+tipo;
      return this._http.get(this.url);
   }

}
