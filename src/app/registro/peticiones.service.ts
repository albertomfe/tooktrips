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
   Register(nickname,password,gender,firstName,lastName,yearOld,country,city,address):Observable<any>
   {
     //Establecemos cabeceras
      let headers = {
        "Accept": "application/json",
        "Content-Type":"application/json"
      };
      var param=`
      {
          "RequestNewUser.item":
          {
              "login":
              {
                  "nickname":"`+nickname+`",
                  "password":"`+password+`",
                  "user":
                  {
                      "typeId":1,
                      "gender":`+gender+`,
                      "firstName":"`+firstName+`",
                      "lastName":"`+lastName+`",
                      "yearOld":`+yearOld+`,
                      "country":"`+country+`",
                      "city":"`+city+`",
                      "address":"`+address+`",
                      "active":true
                  }
              }
          }
      }
      `;
      console.log('dentro del servicio ',param);

      this.url="https://service-place-api.azurewebsites.net/user/";
      return this._http.post(this.url,param,{headers:headers});
   }


}
