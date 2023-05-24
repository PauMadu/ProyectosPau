import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentsService } from 'src/app/services/components.service';
import Usuario from 'src/app/interfaces/usuario.interface'
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin: FormGroup;
  usuarios: Usuario[];

  constructor(
    private usuariosService:UsuariosService,
    private componentsservice: ComponentsService,
    private router: Router,
  ){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
    this.usuarios=[{
      email:"",
      accesoPart:false,
    }]
  }

  ngOnInit(): void { }

  onSubmit(){
    this.componentsservice.login(this.formLogin.value)
    .then(response =>{
      console.log(response.user.email);
      this.router.navigate(["/main"]);
      window.sessionStorage["variable1"] = response.user.email;
      this.usuariosService.addUsuario(response.user.email || "no hay email",false)
    })
    .catch(error=>{
      console.log(error)
      alert(error)
    })
  }

  onClick() {
    this.componentsservice.loginWithGoogle()
      .then(response => {
        console.log(response.user.email);
        this.router.navigate(['/main']);
        window.sessionStorage["variable1"] = response.user.email;
        this.usuariosService.addUsuario(response.user.email || "no hay email",false)
      })
      .catch(error => {
        console.log(error)
        alert(error)
      })
  }
  
  onClick2() {
      this.router.navigate(['/register']);
  }
}

