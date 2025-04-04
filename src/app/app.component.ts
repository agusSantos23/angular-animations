import { Component } from '@angular/core';
import { FadeToggleDirective } from './components/directives/animatios';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [ FadeToggleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({transform: 'translateX(120px)'}),
        animate('1s ease-in', style({transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)'}),
        animate('1s ease-in', style({transform: 'translateX(120px)'}))
      ]),
    ])
  ]
})
export class AppComponent {


  isTrue: boolean = false;

  toggleBtn(){

    this.isTrue = !this.isTrue;
  }

}
