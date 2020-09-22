import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafePipeModule } from 'safe-pipe';
/*servicios cliente - consumir api*/
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NofoundComponent } from './nofound/nofound.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { SliderHotelComponent } from './slider-hotel/slider-hotel.component';
import { CatalogoHotelesComponent } from './catalogo-hoteles/catalogo-hoteles.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RecoveryComponent } from './recovery/recovery.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent,
    NofoundComponent,
    PromocionesComponent,
    ConsejosComponent,
    PublicidadComponent,
    SliderHotelComponent,
    CatalogoHotelesComponent,
    FooterComponent,
    RecoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //para satinizar url
    SafePipeModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
