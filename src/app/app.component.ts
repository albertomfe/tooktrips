import { Component, OnInit } from '@angular/core';
import { PeticionesService } from './peticiones.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PeticionesService]
})
export class AppComponent implements OnInit{
  title = 'TookTrips';

  public ventana: any;
  public acceso:boolean;
  public result:any;
  public msg_error:string;

  constructor(
    private _peticionesService:PeticionesService
  )
  {
    this.acceso=false;
  }


  ngOnInit()
  {
    this.acceso=false;
    this.ventana=window;
    (function($)
    {
        "use strict";
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        }



        function backToTop() {
            var scrollPos = 0;
            var element = $('#back2top');
            $(window).scroll(function() {
                var scrollCur = $(window).scrollTop();
                if (scrollCur > scrollPos) {
                    // scroll down
                    if (scrollCur > 500) {
                        element.addClass('active');
                    } else {
                        element.removeClass('active');
                    }
                } else {
                    // scroll up
                    element.removeClass('active');
                }

                scrollPos = scrollCur;
            });

            element.on('click', function() {
                $('html, body').animate({
                    scrollTop: '0px'
                }, 800);
            });
        }

        /*------------------
            Preloader
        --------------------*/
        $(window).on('load', function () {
            $(".loader").fadeOut();
            $("#preloder").delay(200).fadeOut("slow");
        });

        /*------------------
            Background Set
        --------------------*/
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });



        $(window).on('load', function() {
            $('body').addClass('loaded');
        });

        /*$.scrollUp({
            scrollText:'',
            scrollSpeed: 1000
        });*/

        /*evitar dezplazxamoiento ala derecha*/
        /* this.ventana.onscroll = function () {
           this.ventana.scrollLeft(0,0);
         }*/

    })(jQuery);


    //ejecutar la validacion
    this.validar_token();
  }//oninit




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
            {    //console.log(KeyToken);
              this.acceso=true;
            }//validar mail vacio
          }//localstorage validacion
        }//validar que permita el localstorage
    }


    cerrar_session()
    {
        if(typeof(Storage)!=="undefined")
        {
          //console.log(localStorage.getItem("usuario"));
          if(localStorage.getItem("token"))
          {
            var KeyToken=JSON.parse(localStorage.getItem("token"));
            //console.log(' Cerrar session '+KeyToken);
            //request
            this._peticionesService.CloseSession(KeyToken).subscribe(
              resultado=>{
                this.result=resultado||[];
                //console.log(this.result);
                 this.acceso=true;
                 localStorage.removeItem("token");//eliminar variable localstorage
                 window.location.href='./Login';
              },
              error=>{

              }
            );
          }

        }
    }



}
