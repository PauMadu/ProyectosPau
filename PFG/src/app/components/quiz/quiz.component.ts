import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsService } from 'src/app/services/components.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  constructor(
    private componentsservice: ComponentsService,
    private router: Router,
  ) { }
  contador!:number;
  operacionSeleccionada1: any;

  ngOnInit(): void { }


  onSubmit(){
    // Para intentar que el valor de los ratio se sumen.



    /*var opcion1 = <HTMLInputElement>document.getElementById('opcion1');
    var valor1;
        if(opcion1.checked ){
          valor1 = opcion1.value;
        }
    }*/

    
    /*this.contador =   this.getRadioButtonSelectedValue(document.forms.formP.valor1);
    console.log(this.contador);*/
    //const valor1 = document.querySelector('input[value="status"]:checked');
    /*if(this.contador) {
        alert(this.contador);
    } else {
        alert('No hay ninún elemento activo');
    }*/
  
  }
  clickLogOut() {
    this.componentsservice.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

  getRadioButtonSelectedValue1(values: any){
    var result;/*from  w ww.j a  v a2s  .  com*/
    for (var i = 0; i < values.length; i++) {
      if (values[i].checked) {
        result = values[i].value
      }
    }
    alert(result)
  }
}

  