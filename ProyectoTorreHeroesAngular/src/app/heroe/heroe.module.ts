import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroeComponent } from './add-heroe/add-heroe.component';
import { FormsModule } from '@angular/forms';
import { ListadoHeroesComponent } from './listado-heroes/listado-heroes.component';
import { HeroeService } from './heroe.service';
import { CombateHeroesComponent } from './combate-heroes/combate-heroes.component';
@NgModule({
  declarations: [
    AddHeroeComponent,
    ListadoHeroesComponent,
    CombateHeroesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    HeroeService
  ],
  exports: [
    AddHeroeComponent,
    CombateHeroesComponent,
    ListadoHeroesComponent
  ]
})
export class HeroeModule {

}
export interface Heroe{
  id: number;
  nombre: string;
  titulo: number;
  nivel: number;
  imagen: string;
  vida: number;
  velocidad: number;
  ataque: number;
  defensa: number;
}
