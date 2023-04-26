import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsService } from 'src/app/services/components.service';

/*import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';*/

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //chistes!: any[];
  constructor(
    //private firestore: AngularFirestore,
    private componentsservice: ComponentsService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    /*this.firestore.collection('users').valueChanges().subscribe(chistes => {
      this.chistes = chistes;
    });*/
  }
  clickLogOut() {
    this.componentsservice.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

  clickInstru(){
    this.router.navigate(['/instrumentos']);
  }

  clickQuiz(){
    this.router.navigate(['/quiz']);
  }

}