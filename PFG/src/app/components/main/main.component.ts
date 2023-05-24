import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(
    private componentsservice: ComponentsService,
    private router: Router
    
  ) { }

  ngOnInit(): void {  }

  clickInstru(){
    this.router.navigate(['/instrumentos']);
  }

  clickQuiz(){
    this.router.navigate(['/quiz']);
  }

  clickLogOut() {
    this.componentsservice.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}