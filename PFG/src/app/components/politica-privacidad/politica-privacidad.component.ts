import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-politica-privacidad',
  templateUrl: './politica-privacidad.component.html',
  styleUrls: ['./politica-privacidad.component.css']
})
export class PoliticaPrivacidadComponent {

  constructor(
    private componentsservice: ComponentsService,
    private router: Router,
  ){}
  
  clickLogOut() {
    this.componentsservice.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
