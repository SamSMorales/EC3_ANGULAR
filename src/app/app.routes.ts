import { Component } from "@angular/core";
import { RouterModule, Router, Routes} from "@angular/router";
import {VuelosComponent} from "./components/vuelos/vuelos.component";
import {PaqueteComponent} from "./components/paquete/paquete.component";
import {ViajeComponent} from "./components/viaje/viaje.component";
import {HotelComponent} from "./components/hotel/hotel.component";
import {HotelesComponent} from "./components/hoteles/hoteles.component";
import {AutosComponent} from "./components/autos/autos.component";
import {ActividadesComponent} from "./components/actividades/actividades.component";
import {SeguroComponent} from "./components/seguro/seguro.component";
import {LoginComponent} from "./components/login/login.component";

const app_routes:Routes=[
    {path:'vuelos', component:VuelosComponent},
    {path:'paquete', component:PaqueteComponent},
    {path:'viaje', component:ViajeComponent},
    {path:'hotel', component:HotelComponent},
    {path:'hoteles', component:HotelesComponent},
    {path:'autos', component:AutosComponent},
    {path:'actividades', component:ActividadesComponent},
    {path:'seguro', component:SeguroComponent},
    {path:'login', component:LoginComponent},
    {path:'**',pathMatch:'full', redirectTo:'vuelos'}
];

export const app_rounting=RouterModule.forRoot(app_routes);