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
      state('closed', style({ transform: 'translateX(80px)' })),
      state('open', style({ transform: 'translateX(0)' })),
      transition('closed <=> open', [animate('1s ease-in')])
    ])
  ]
})
export class AppComponent {

  protected menuState: 'open' | 'closed' = 'open';

  isTrue = true;

  toggleBtn(){
    this.menuState = this.menuState === 'open' ? 'closed' : 'open';

    this.isTrue = !this.isTrue;
    console.log(this.menuState);
  }

}
