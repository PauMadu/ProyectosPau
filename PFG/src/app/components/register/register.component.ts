import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  formReg: FormGroup;

  constructor(
    private componentsservice: ComponentsService,
    private router: Router,
  ){
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  
  ngOnInit(): void { }

  onSubmit(){
    this.componentsservice.register(this.formReg.value)
    .then(response =>{
      console.log(response);
      this.router.navigate(["/login"])
    })
    .catch(error=>console.log(error))
  }

  onClick(){
    this.router.navigate(["/login"])
  }
}
