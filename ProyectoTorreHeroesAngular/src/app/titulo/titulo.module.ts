import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TituloModule { }

export interface Titulo{
  id: number;
  nombre: string;
}
