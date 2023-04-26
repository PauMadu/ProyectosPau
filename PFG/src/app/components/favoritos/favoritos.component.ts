import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Instrumento from 'src/app/interfaces/instrumento.interface'
import { InstrumentosService } from 'src/app/services/instrumentos.service';
import { ComponentsService } from 'src/app/services/components.service';
import { ChistesService } from 'src/app/services/chistes.service';
import Chiste from 'src/app/interfaces/chiste.interface';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  instrumentos: Instrumento[];
  chistes:Chiste[]

  constructor(
    private instrumentosService:InstrumentosService,
    private chistesService:ChistesService,
    private componentsservice: ComponentsService,
    private router: Router,
  ){
    this.instrumentos=[{
      foto:"https://instrumentosetnicos.org/wp-content/uploads/dulzaina_valenciana_m.jpg",
      descripcion:"esto es una prueba de descripcion",
      familia:"viento",
      favoritos:false,
      link_compra:"string.com",
      url_video:"string.com",
      nombre:"Bombo",
    }],
    this.chistes=[{
      chiste:"No hay chistes.",
      numero:"Chiste 0",
    }]
  }

  ngOnInit(): void {
      this.instrumentosService.getInstru().subscribe(instrumentos => {
      this.instrumentos = instrumentos;
    })
    
    this.chistesService.getChiste().subscribe(chistes => {
      this.chistes = chistes;
    })
  }

  clickLogOut() {
    this.componentsservice.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

  clickFav(){ //Como consigo la propiedad favoritos, y la puedo modificar??
    /*this.instrumentosService.getInstru(favoritos).subscribe(instrumentos => {
      this.instrumentos = instrumentos;
  })*/
  }
}

