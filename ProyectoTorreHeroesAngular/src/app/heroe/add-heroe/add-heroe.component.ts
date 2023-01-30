import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../heroe.service';
import { Heroe } from '../heroe.module';
import { Titulo } from '../../titulo/titulo.module';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.css']
})
export class AddHeroeComponent implements OnInit {
  heroe!: Heroe;
  heroes!: Heroe[];
  enemigo!: Heroe[];
  titulos!: Titulo[];
  constructor(private heroeService: HeroeService) { }
  
  ngOnInit() {
    this.heroe = this.heroeService.nuevoHeroe();
    this.heroes = this.heroeService.getHeroe();
    this.titulos = this.heroeService.getTitulos();
    this.enemigo = this.heroeService.getEnemigo();
  }

  nuevoHeroe(): void {
    this.heroeService.agregarHeroe(this.heroe);
    this.heroe = this.heroeService.nuevoHeroe();
  }
  
  selectFile(event: any){
    if(!event.target.files[0] || event.target.files[0].length == 0){
      alert("Please select a file")
      return;
    }
    var mimetype = event.target.files[0].type
    if(mimetype.match(/image\/*/) == null){
      alert("Please only images")
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event)=>{
      if(this.heroe !== undefined){
        this.heroe.imagen = reader.result as string;
      }
    }
  }
}
