import { Directive, ElementRef, HostBinding, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appCardhover]'
})
export class CardhoverDirective {

  @HostBinding('class.card-outline-primary') private ishovering: boolean;

  constructor(private el: ElementRef,
    private renderer: Renderer) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {
    const part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    const part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
  }

}
