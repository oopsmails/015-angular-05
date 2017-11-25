import { Card } from './card-hosting.component';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    template: `
  <div class="card card-block" appCardhover>
    <h4 class="card-title">{{ card.title }}</h4>
    <p class="card-text"
       [style.display]="'none'">{{ card.text }}</p>
  </div>
    `
})
export class CardComponent {
    @Input() card: Card;
}
