import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../heroe.service';
import { Heroe } from '../heroe.module';

@Component({
  selector: 'app-combate-heroes',
  templateUrl: './combate-heroes.component.html',
  styleUrls: ['./combate-heroes.component.css']
})
export class CombateHeroesComponent implements OnInit {
  
  idA: number;
  idB: number;
  heroeA!: Heroe;
  enemigo!: Heroe;
  heroes!: Heroe[];
  enemigos!: Heroe[];

  private heroeService!: HeroeService

  constructor(hs: HeroeService) {
    this.heroeService=hs;
    this.idA=0;
    this.idB=0;
  }

  ngOnInit() {
    this.heroes = this.heroeService.getHeroe();
    this.enemigos = this.heroeService.getEnemigo();
  }

  pelea(){
    this.heroeA = this.heroes[this.idA];
    this.enemigo = this.enemigos[this.idB];
    var salir = false;
    var cantidad = 20;
    // FIGHT!!
    while(cantidad>0 && !salir){
      if(this.heroeA.velocidad>=this.enemigo.velocidad){
        this.enemigo.vida=this.enemigo.vida-(this.heroeA.ataque-this.enemigo.defensa)
        if(this.enemigo.vida>0)
          this.heroeA.vida=this.heroeA.vida-(this.enemigo.ataque-this.heroeA.defensa)

      }
      else{
        this.heroeA.vida=this.heroeA.vida-(this.enemigo.ataque-this.heroeA.defensa)
        if(this.heroeA.vida>0)
          this.enemigo.vida=this.enemigo.vida-(this.heroeA.ataque-this.enemigo.defensa)

      }
      if(this.heroeA.vida<=0 || this.enemigo.vida<=0) salir=true;
      cantidad--;
    }
    //Comprobando victorias
    //GANA A
    if(this.enemigo.vida<=0){
      this.heroeService.getNivel(this.heroeA)
      this.heroeService.killEnemigo(this.enemigo)
    }
    else if(this.heroeA.vida<=0){
      this.heroeService.getNivel(this.enemigo)
      this.heroeService.killHeroe(this.heroeA)
    }
  }
}
