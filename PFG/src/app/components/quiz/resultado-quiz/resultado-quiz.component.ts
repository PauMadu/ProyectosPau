import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsService } from 'src/app/services/components.service';
import Instrumento from 'src/app/interfaces/instrumento.interface'
import { InstrumentosService } from 'src/app/services/instrumentos.service';

@Component({
  selector: 'app-resultado-quiz',
  templateUrl: './resultado-quiz.component.html',
  styleUrls: ['./resultado-quiz.component.css']
})

export class ResultadoQuizComponent implements OnInit{
  instrumentos: Instrumento[];
  instrumento1: string;
  instrumento2: string;
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
    }],
    this.instrumento1="",
    this.instrumento2=""
  }

  ngOnInit(): void {
    this.instrumentosService.getInstru().subscribe(instrumentos => {
    this.instrumentos = instrumentos});

    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var opcion1 = urlParams.get('opcion1') ?? 'nada';
    var opcion2 = urlParams.get('opcion2') ?? 'nada';
    var opcion3 = urlParams.get('opcion3') ?? 'nada';
    var opcion4 = urlParams.get('opcion4') ?? 'nada';
    var opcion5 = urlParams.get('opcion5') ?? 'nada';
    var opcion6 = urlParams.get('opcion6') ?? 'nada';

    console.log(opcion1);
    console.log(opcion2);
    console.log(opcion3);
    console.log(opcion4);
    console.log(opcion5);
    console.log(opcion6);
    
    if(opcion1 == 'nada' && opcion2 == 'nada' && opcion6 == 'nada'){
      if(opcion4 == 'nada'){
        this.instrumento1 = "piano"
        this.instrumento2 = "flauta"
      }
      else if(opcion4 == 'pequeño'){
        this.instrumento1 = "flauta"
        this.instrumento2 = "violin"
      } 
      else if(opcion4 == 'grande'){
        this.instrumento1 = "trombon"
        this.instrumento2 = "contrabajo"
      }
    }
    else if(opcion1 == 'percu' && opcion2 == 'nada' && opcion6 == 'nada' || opcion1 == 'nada' && opcion2 == 'percu' && opcion6 == 'nada' || opcion1 == 'nada' && opcion2 == 'nada' && opcion6 == 'percu' || opcion1 == 'percu' && opcion2 == 'percu' && opcion6 == 'nada' || opcion1 == 'percu' && opcion2 == 'nada' && opcion6 == 'percu' || opcion1 == 'nada' && opcion2 == 'percu' && opcion6 == 'percu' || opcion1 == 'percu' && opcion2 == 'percu' && opcion6 == 'percu' || opcion1 == 'percu' && opcion2 == 'percu' && opcion6 == 'viento' || opcion1 == 'percu' && opcion2 == 'viento' && opcion6 == 'percu' || opcion1 == 'viento' && opcion2 == 'percu' && opcion6 == 'percu' || opcion1 == 'percu' && opcion2 == 'percu' && opcion6 == 'cuerda' || opcion1 == 'percu' && opcion2 == 'cuerda' && opcion6 == 'percu' || opcion1 == 'cuerda' && opcion2 == 'percu' && opcion6 == 'percu'){
      if(opcion4 == 'nada'){
        this.instrumento1 = "bateria"
        this.instrumento2 = "timbales"
      }
      else if(opcion4 == 'pequeño'){
        this.instrumento1 = "caja"
        this.instrumento2 = "xilofono"
      } 
      else if(opcion4 == 'grande'){
        this.instrumento1 = "bombo"
        this.instrumento2 = "bateria"
      }
    }
    else if(opcion1 == 'viento' && opcion2 == 'nada' && opcion6 == 'nada' || opcion1 == 'nada' && opcion2 == 'viento' && opcion6 == 'nada' || opcion1 == 'nada' && opcion2 == 'nada' && opcion6 == 'viento' || opcion1 == 'viento' && opcion2 == 'viento' && opcion6 == 'nada' || opcion1 == 'viento' && opcion2 == 'nada' && opcion6 == 'viento' || opcion1 == 'nada' && opcion2 == 'viento' && opcion6 == 'viento' || opcion1 == 'viento' && opcion2 == 'viento' && opcion6 == 'viento' || opcion1 == 'viento' && opcion2 == 'viento' && opcion6 == 'percu' || opcion1 == 'viento' && opcion2 == 'percu' && opcion6 == 'viento' || opcion1 == 'percu' && opcion2 == 'viento' && opcion6 == 'viento' || opcion1 == 'viento' && opcion2 == 'viento' && opcion6 == 'cuerda' || opcion1 == 'viento' && opcion2 == 'cuerda' && opcion6 == 'viento' || opcion1 == 'cuerda' && opcion2 == 'viento' && opcion6 == 'viento'){
      if(opcion4 == 'nada'){
        this.instrumento1 = "flauta"
        this.instrumento2 = "clarinete"
      }
      else if(opcion4 == 'pequeño'){
        this.instrumento1 = "flauta"
        this.instrumento2 = "trompeta"
      } 
      else if(opcion4 == 'grande'){
        this.instrumento1 = "saxofon"
        this.instrumento2 = "trombon"
      }
    }
    else if(opcion1 == 'cuerda' && opcion2 == 'nada' && opcion6 == 'nada' || opcion1 == 'nada' && opcion2 == 'cuerda' && opcion6 == 'nada' || opcion1 == 'nada' && opcion2 == 'nada' && opcion6 == 'cuerda' || opcion1 == 'cuerda' && opcion2 == 'cuerda' && opcion6 == 'nada' || opcion1 == 'cuerda' && opcion2 == 'nada' && opcion6 == 'cuerda' || opcion1 == 'nada' && opcion2 == 'cuerda' && opcion6 == 'cuerda' || opcion1 == 'cuerda' && opcion2 == 'cuerda' && opcion6 == 'cuerda'){
      if(opcion4 == 'nada'){
        this.instrumento1 = "piano"
        this.instrumento2 = "guitarra"
      }
      else if(opcion4 == 'pequeño'){
        this.instrumento1 = "guitarra"
        this.instrumento2 = "violin"
      } 
      else if(opcion4 == 'grande'){
        this.instrumento1 = "contrabajo"
        this.instrumento2 = "violonchelo"
      }
    }

    else if(opcion1 == 'percu' && opcion2 == 'cuerda' && opcion6 == 'nada' || opcion1 == 'percu' && opcion2 == 'nada' && opcion6 == 'cuerda' || opcion1 == 'cuerda' && opcion2 == 'percu' && opcion6 == 'nada' || opcion1 == 'cuerda' && opcion2 == 'nada' && opcion6 == 'percu'){
      if(opcion4 == 'nada'){
        this.instrumento1 = "piano"
        this.instrumento2 = "guitarra"
      }
      else if(opcion4 == 'pequeño'){
        this.instrumento1 = "piano"
        this.instrumento2 = "xilofono"
      } 
      else if(opcion4 == 'grande'){
        this.instrumento1 = "piano"
        this.instrumento2 = "contrabajo"
      }
    }
    else if(opcion1 == 'percu' && opcion2 == 'viento' && opcion6 == 'nada' || opcion1 == 'percu' && opcion2 == 'nada' && opcion6 == 'viento' || opcion1 == 'viento' && opcion2 == 'percu' && opcion6 == 'nada' || opcion1 == 'viento' && opcion2 == 'nada' && opcion6 == 'percu'){
      if(opcion4 == 'nada'){
        this.instrumento1 = "trompeta"
        this.instrumento2 = "saxofon"
      }
      else if(opcion4 == 'pequeño'){
        this.instrumento1 = "trompeta"
        this.instrumento2 = "xilofono"
      } 
      else if(opcion4 == 'grande'){
        this.instrumento1 = "trombon"
        this.instrumento2 = "timbales"
      }
    }
    else if(opcion1 == 'cuerda' && opcion2 == 'viento' && opcion6 == 'nada' || opcion1 == 'cuerda' && opcion2 == 'nada' && opcion6 == 'viento' || opcion1 == 'viento' && opcion2 == 'cuerda' && opcion6 == 'nada' || opcion1 == 'viento' && opcion2 == 'nada' && opcion6 == 'cuerda'){
      if(opcion4 == 'nada'){
        this.instrumento1 = "violin"
        this.instrumento2 = "clarinete"
      }
      else if(opcion4 == 'pequeño'){
        this.instrumento1 = "violin"
        this.instrumento2 = "flauta"
      } 
      else if(opcion4 == 'grande'){
        this.instrumento1 = "trombon"
        this.instrumento2 = "contrabajo"
      }
    }

    else if(opcion1 == 'percu' && opcion2 == 'viento' && opcion6 == 'cuerda' || opcion1 == 'percu' && opcion2 == 'cuerda' && opcion6 == 'viento' || opcion1 == 'viento' && opcion2 == 'percu' && opcion6 == 'cuerda' || opcion1 == 'viento' && opcion2 == 'cuerda' && opcion6 == 'percu' || opcion1 == 'cuerda' && opcion2 == 'percu' && opcion6 == 'viento' || opcion1 == 'cuerda' && opcion2 == 'viento' && opcion6 == 'percu'){
      if(opcion4 == 'nada'){
        this.instrumento1 = "violin"
        this.instrumento2 = "clarinete"
      }
      else if(opcion4 == 'pequeño'){
        this.instrumento1 = "violin"
        this.instrumento2 = "flauta"
      } 
      else if(opcion4 == 'grande'){
        this.instrumento1 = "trombon"
        this.instrumento2 = "contrabajo"
      }
    }
    
    console.log(this.instrumento1);
    console.log(this.instrumento2);
  }
  
  clickLogOut() {
    this.componentsservice.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
