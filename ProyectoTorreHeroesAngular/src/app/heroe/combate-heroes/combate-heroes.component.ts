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
  heroeB!: Heroe;
  heroes!: Heroe[];

  private heroeService!: HeroeService

  constructor(hs: HeroeService) {
    this.heroeService=hs;
    this.idA=0;
    this.idB=0;
  }

  ngOnInit() {
    this.heroes = this.heroeService.getHeroe();
  }

  pelea(){
    this.heroeA = this.heroes[this.idA];
    this.heroeB = this.heroes[this.idB];
    var salir = false;
    var cantidad = 20;
    // FIGHT!!
    while(cantidad>0 && !salir){
      if(this.heroeA.velocidad>=this.heroeB.velocidad){
        this.heroeB.vida=this.heroeB.vida-(this.heroeA.ataque-this.heroeB.defensa)
        if(this.heroeB.vida>0)
          this.heroeA.vida=this.heroeA.vida-(this.heroeB.ataque-this.heroeA.defensa)

      }
      else{
        this.heroeA.vida=this.heroeA.vida-(this.heroeB.ataque-this.heroeA.defensa)
        if(this.heroeA.vida>0)
          this.heroeB.vida=this.heroeB.vida-(this.heroeA.ataque-this.heroeB.defensa)

      }
      if(this.heroeA.vida<=0 || this.heroeB.vida<=0) salir=true;
      cantidad--;
    }
    //Comprobando victorias
    //GANA A
    if(this.heroeB.vida<=0){
      this.heroeService.getNivel(this.heroeA)
      this.heroeService.killHeroe(this.heroeB)
    }
    else if(this.heroeA.vida<=0){
      this.heroeService.getNivel(this.heroeB)
      this.heroeService.killHeroe(this.heroeA)
    }
  }
}
