import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ComponentsService } from 'src/app/services/components.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-partituras-premium',
  templateUrl: './partituras-premium.component.html',
  styleUrls: ['./partituras-premium.component.css']
})
export class PartiturasPremiumComponent implements OnInit{
  public pagoRealizado: boolean = false;
  email = window.sessionStorage.getItem('variable1') 

  constructor(
    private componentsservice: ComponentsService,
    private usuarioService: UsuariosService,
    private router: Router,
  ){}

  public realizarPago(): void {
    this.pagoRealizado = true;
    this.usuarioService.updateUsuario(this.email ||"nada" ,true)
    window.open('https://www.paypal.com/donate/?hosted_button_id=8HYY4FA5EPTYW', '_blank');
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
