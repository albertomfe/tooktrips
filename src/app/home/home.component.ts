import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

    (function(doc, script) {
        var js,
            fjs = doc.getElementsByTagName(script)[0],
            add = function(url, id) {
                if (doc.getElementById(id)) {
                    return;
                }
                js = doc.createElement(script);
                js.src = url;
                js.async;
                id && (js.id = id);
                fjs.parentNode.insertBefore(js, fjs);
            };
        add('https://reservas.tooktrips.com/widget/engine?lang=es&target=.miClase', 'js-xpc-widget');
    }(document, 'script'));

  }

}
