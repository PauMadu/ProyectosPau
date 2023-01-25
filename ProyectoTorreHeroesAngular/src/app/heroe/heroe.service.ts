import { Injectable } from '@angular/core';
import { Heroe } from './heroe.module';
import { Titulo } from '../titulo/titulo.module';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  private heroes: Heroe[];
  private titulos: Titulo[];

  constructor() {
    this.titulos = [
      {
        id: 0,
        nombre: 'Tank'
      },
      {
        id: 1,
        nombre: 'Second Tank'
      },
      {
        id: 2,
        nombre: 'DPS'
      },
      {
        id: 3,
        nombre: 'Healer'
      },
    ];
    this.heroes=[]
  }
  getHeroe(){
    return this.heroes;
  }
  getTitulos(){
    return this.titulos;
  }
  getTitulo(id: number){
    return this.titulos[id].nombre;
  }
  getNivel(heroe: Heroe){
    heroe.nivel = heroe.nivel+1;
    heroe.vida = heroe.vida+2;
    var rnd = Math.floor(Math.random() * (5-0))
    if(rnd==2){
      heroe.velocidad ++; 
    }
    else if(rnd==3){
      heroe.ataque ++;
    }
    else if(rnd==4){
      heroe.defensa ++;
    }
  }

  agregarHeroe(heroe: Heroe) {
    this.heroes.push(heroe);
  }
  nuevoHeroe(): Heroe {
    return {
      id: this.heroes.length,
      nombre: "",
      titulo: 0,
      nivel: 1,
      imagen: "",
      vida: 10,
      velocidad: Math.floor(Math.random() * (6-0)),
      ataque: Math.floor(Math.random() * (9-3)+3),
      defensa: Math.floor(Math.random() * (6 - 0)),
    }
  }
  killHeroe(heroe: Heroe){
    const index = this.heroes.indexOf(heroe, 0);
    if (index > -1) {
      this.heroes.splice(index, 1);
    }
  }
}
