import { Component } from '@angular/core';
import { Heroe} from './../heroe.module';
import { Titulo } from '../../titulo/titulo.module';
import { HeroeService } from './../heroe.service';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css']
})
export class ListadoHeroesComponent {
  heroes!: Heroe[];
  enemigos!: Heroe[];
  titulos!: Titulo[];
  constructor(private HeroeService: HeroeService) { }

  ngOnInit() {
    this.heroes = this.HeroeService.getHeroe();
    this.enemigos = this.HeroeService.getEnemigo();
    this.titulos = this.HeroeService.getTitulos();
  }
  subirNivel(heroe: Heroe) {
    this.HeroeService.getNivel(heroe)
  }
  
}
