import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Instrumento from 'src/app/interfaces/instrumento.interface'
import { InstrumentosService } from 'src/app/services/instrumentos.service';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {
  
  instrumentos: Instrumento[];
  
  constructor(
    private instrumentosService:InstrumentosService,
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
    }]
  }

  ngOnInit(): void {
      this.instrumentosService.getInstru().subscribe(instrumentos => {
      this.instrumentos = instrumentos;
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
