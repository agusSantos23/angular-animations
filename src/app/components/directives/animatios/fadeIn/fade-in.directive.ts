import { Directive, ElementRef, inject, OnInit } from '@angular/core';
import { animate, AnimationBuilder, style } from '@angular/animations';

@Directive({
  selector: '[fadeIn]'
})
export class FadeInDirective implements OnInit {
  elementRef: ElementRef = inject(ElementRef);
  builder: AnimationBuilder = inject(AnimationBuilder)

  private animation = this.builder.build([
    style({ opacity: 0 }),
    animate('5s ease-in', style({ opacity: 1}))
  ]);

  ngOnInit(): void {    
    const player = this.animation.create(this.elementRef.nativeElement);

    player.play()
  }
}
