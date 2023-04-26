import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsService } from 'src/app/services/components.service';
import { Firestore } from '@angular/fire/firestore';
import { collection, query, where, getDocs } from "firebase/firestore";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {


  constructor(
    private componentsservice: ComponentsService,
    private router: Router,
    private firestore: Firestore,
  ) { }

  clickLogOut() {
    this.componentsservice.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

  generarFav(){
    const q = query(collection(this.firestore, "instrumentos"), where("favoritos", "==", true));
      return q
  }
}
