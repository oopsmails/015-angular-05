import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[applicationLoading]'
})
export class ApplicationLoadingDirective implements OnChanges {
    @Input() applicationLoading: boolean = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnChanges(changes: SimpleChanges) {
        const parent = this.renderer.parentNode(this.elRef.nativeElement);
        console.log('ApplicationLoadingDirective, ngOnChanges', changes.applicationLoading);
        if (changes.applicationLoading.currentValue) {
            this.renderer.setStyle(parent, 'color', 'blue');
        } else {
            this.renderer.setStyle(parent, 'color', 'yellow');
        }
    }
}
