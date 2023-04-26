import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Instrumento from 'src/app/interfaces/instrumento.interface'
import { InstrumentosService } from 'src/app/services/instrumentos.service';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-caracteristicas-instru',
  templateUrl: './caracteristicas-instru.component.html',
  styleUrls: ['./caracteristicas-instru.component.css']
})
export class CaracteristicasInstruComponent implements OnInit{

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

  añadirFav(){
    

  }
  clickLogOut() {
    this.componentsservice.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
