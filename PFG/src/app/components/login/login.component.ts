import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin: FormGroup;

  constructor(
    private componentsservice: ComponentsService,
    private router: Router,
  ){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void { }

  onSubmit(){
    this.componentsservice.login(this.formLogin.value)
    .then(response =>{
      console.log(response);

      this.router.navigate(["/main"]);
    })
    .catch(error=>{
        return "el gmail o contraseña no conincide"
    })
  }

  onClick() {
    this.componentsservice.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch(error => console.log(error))
  }
  onClick2() {
      this.router.navigate(['/register']);
  }
}

