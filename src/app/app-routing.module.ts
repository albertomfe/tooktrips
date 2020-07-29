import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//modulos
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { NofoundComponent } from './nofound/nofound.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Contacto',component:ContactoComponent},
  {path:'Login',component:LoginComponent},
  {path:'Registro',component:RegistroComponent},
  {path:'Promociones',component:PromocionesComponent},
  {path:'Publicidad',component:PublicidadComponent},
  {path:'Consejos',component:ConsejosComponent},
  {path: '**', component: NofoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
