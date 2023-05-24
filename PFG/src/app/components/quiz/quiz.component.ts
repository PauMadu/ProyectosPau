import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsService } from 'src/app/services/components.service';

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

  ngOnInit(): void { }

  onSubmit(){
    this.router.navigate(['/resultado']);
  }

  clickLogOut() {
    this.componentsservice.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}

  