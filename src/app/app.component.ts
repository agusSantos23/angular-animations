import { Component } from '@angular/core';
import { FadeInDirective } from './components/directives/animatios';

@Component({
  selector: 'app-root',
  imports: [ FadeInDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-animations';
  isTrue = true;

  toggleBtn(){
    this.isTrue = !this.isTrue;
    console.log(this.isTrue);
    
  }

}
