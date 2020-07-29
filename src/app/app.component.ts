import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TookTrips';


  ngOnInit()
  {
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

    })(jQuery);


  }


}
