import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '@core/models/joke';

@Component({
  selector: 'joke',
  template: `
  <div class="card card-block">
    <h4 class="card-title">
      <ng-content select=".setup"></ng-content>
    </h4>
    <p class="card-text"
       [hidden]="data.hide">
      <ng-content select=".punchline"></ng-content>
    </p>
  </div>
  <a class="btn btn-primary"
    (click)="data.toggle()">Tell Me
  </a>
  `,
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  @Input('joke') data: Joke;

}
