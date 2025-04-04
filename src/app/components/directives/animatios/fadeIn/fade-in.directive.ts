import { Directive, ElementRef, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { animate, AnimationBuilder, style } from '@angular/animations';

@Directive({
  selector: '[fadeToggle]'
})
export class FadeToggleDirective implements  OnChanges {
  private elementRef: ElementRef = inject(ElementRef);
  private builder: AnimationBuilder = inject(AnimationBuilder);
  private player: any;

  @Input('fadeToggle') visible: boolean | undefined;
  @Input() duration: string = '0.5s'; 


  ngOnChanges(changes: SimpleChanges): void {

    if (changes['visible']) {
      
      this.animateFade(changes['visible'].currentValue);
    }
  }

  private animateFade(shouldFadeIn: boolean): void {
    if (this.player) this.player.destroy();

    this.player = this.builder.build([
      style({ opacity: shouldFadeIn ? 0 : 1 }),
      animate(`${this.duration} ease-in-out`, style({ opacity: shouldFadeIn ? 1 : 0 })),

    ]).create(this.elementRef.nativeElement);
    
    this.player.play();
  }
}