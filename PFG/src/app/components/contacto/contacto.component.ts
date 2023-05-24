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
  public emailEnviado: boolean = false;
  public pagoRealizado: boolean = false;

  constructor(
    private componentsservice: ComponentsService,
    private router: Router
    
  ) {  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_w14vs7e', 'template_r1ytb5n', e.target as HTMLFormElement, 'GxOASNR4v70X6RFVK')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  public enviarEmail(): void{
    this.emailEnviado = true;
  }

  public realizarPago(): void {
    this.pagoRealizado = true;
  }

  ngOnInit(): void {  }

  clickLogOut() {
    this.componentsservice.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
