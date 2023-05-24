import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Instrumento from 'src/app/interfaces/instrumento.interface'
import { InstrumentosService } from 'src/app/services/instrumentos.service';
import Usuario from 'src/app/interfaces/usuario.interface'
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-caracteristicas-instru',
  templateUrl: './caracteristicas-instru.component.html',
  styleUrls: ['./caracteristicas-instru.component.css']
})
export class CaracteristicasInstruComponent implements OnInit{
  instrumentos: Instrumento[];
  instrumento: string;
  usuarios: Usuario[];
  emailF:any;

  constructor(
    private instrumentosService:InstrumentosService,
    private usuariosService:UsuariosService,
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
      partitura:""
    }],
    this.instrumento="",
    this.usuarios=[{
      email:"",
      accesoPart:false,
    }]
  }
  
  ngOnInit(): void {
      this.instrumentosService.getInstru().subscribe(instrumentos => {
      this.instrumentos = instrumentos;
    });
    this.usuariosService.getUsuario().subscribe(usuario => {
      this.usuarios = usuario;
    });
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    this.instrumento = urlParams.get('nombreInstru') ?? 'nada';
    console.log(this.instrumento);
    this.emailF= window.sessionStorage.getItem('variable1') 
    console.log(this.emailF)
  }

  clickLogOut() {
    this.componentsservice.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
