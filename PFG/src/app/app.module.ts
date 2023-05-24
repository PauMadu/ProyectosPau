import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CaracteristicasInstruComponent } from './components/caracteristicas-instru/caracteristicas-instru.component';
import { ResultadoQuizComponent } from './components/quiz/resultado-quiz/resultado-quiz.component';
import { PartiturasPremiumComponent } from './components/caracteristicas-instru/partituras-premium/partituras-premium.component';
import { PoliticaPrivacidadComponent } from './components/politica-privacidad/politica-privacidad.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    InstrumentosComponent,
    FavoritosComponent,
    ContactoComponent,
    CaracteristicasInstruComponent,
    ResultadoQuizComponent,
    PartiturasPremiumComponent,
    PoliticaPrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

