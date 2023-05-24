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
      foto:"",
      descripcion:"",
      familia:"",
      favoritos:false,
      link_compra:"",
      url_video:"",
      nombre:"",
      partitura:"",
    }]
  }

  ngOnInit(): void {
      this.instrumentosService.getInstru().subscribe(instrumentos => {
      this.instrumentos = instrumentos;
    })
  }

  clickCaract(){
    this.router.navigate(['/caracteristicas']);
  }

  clickLogOut() {
    this.componentsservice.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
