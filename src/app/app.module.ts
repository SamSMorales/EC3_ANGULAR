import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// RUTAS
import { app_rounting } from './app.routes'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { PaqueteComponent } from './components/paquete/paquete.component';
import { ViajeComponent } from './components/viaje/viaje.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { AutosComponent } from './components/autos/autos.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { SeguroComponent } from './components/seguro/seguro.component';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    VuelosComponent,
    PaqueteComponent,
    ViajeComponent,
    HotelComponent,
    HotelesComponent,
    AutosComponent,
    ActividadesComponent,
    SeguroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    app_rounting,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatGridListModule,
    MatExpansionModule,
    MatStepperModule,
    MatTabsModule,
    MatDatepickerModule

  ],
  providers: [],
  bootstrap: [AppComponent]

  
  
})

export class AppModule { }
