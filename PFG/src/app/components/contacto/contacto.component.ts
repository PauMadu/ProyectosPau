import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsService } from 'src/app/services/components.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  constructor(
    private componentsservice: ComponentsService,
    private router: Router
    
  ) {  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_w14vs7e', 'template_r1ytb5n', e.target as HTMLFormElement, 'GxOASNR4v70X6RFVK')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert("Mensaje enviado")
      }, (error) => {
        console.log(error.text);
      });
  }

  ngOnInit(): void {
  }

  clickLogOut() {
    this.componentsservice.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
  
}
