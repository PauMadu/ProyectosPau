import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CaracteristicasInstruComponent } from './components/caracteristicas-instru/caracteristicas-instru.component';
import { ResultadoQuizComponent } from './components/resultado-quiz/resultado-quiz.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: '/main' },
{
  path: 'main',
  component: MainComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login']))
},
{ path: 'register', component: RegisterComponent},
{ path: 'login', component: LoginComponent},
{ path: 'quiz', component: QuizComponent,
...canActivate(() => redirectUnauthorizedTo(['/login']))
},
{ path: 'instrumentos', component: InstrumentosComponent,
...canActivate(() => redirectUnauthorizedTo(['/login']))
},
{ path: 'favoritos', component: FavoritosComponent,
...canActivate(() => redirectUnauthorizedTo(['/login']))
},
{ path: 'contacto', component: ContactoComponent,
...canActivate(() => redirectUnauthorizedTo(['/login']))
},
{ path: 'caracteristicas', component: CaracteristicasInstruComponent,
...canActivate(() => redirectUnauthorizedTo(['/login']))
},
{ path: 'resultado', component: ResultadoQuizComponent,
...canActivate(() => redirectUnauthorizedTo(['/login']))
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }