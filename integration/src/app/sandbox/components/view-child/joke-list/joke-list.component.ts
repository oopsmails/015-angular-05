import { Joke } from '@core/models/joke';
import { JokeComponent } from './../joke/joke.component';
import {
  Component,
  OnInit,
  AfterContentInit,
  AfterViewInit,
  ViewChild, ViewChildren, ContentChild, ElementRef, QueryList
} from '@angular/core';


@Component({
  selector: 'joke-list',
  template: `
  <h4 #header>View Jokes(@ViewChild)</h4>
  <joke *ngFor="let j of jokes" [joke]="j">
    <span class="setup">{{ j.setup }}?</span>
    <h1 class="punchline">{{ j.punchline }}</h1>
  </joke>
  <h4>Content Jokes</h4>
  <ng-content></ng-content>
  `,
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit,
  AfterContentInit,
  AfterViewInit {

  jokes: Joke[] = [
    new Joke('What did the cheese say when it looked in the mirror', 'Hello-me (Halloumi)'),
    new Joke('What kind of cheese do you use to disguise a small horse', 'Mask-a-pony (Mascarpone)')
  ];

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild('header') headerEl: ElementRef;
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

  constructor() {
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
    console.log(`new - jokeContentChild is ${this.jokeContentChild}`);
  }

  ngOnInit() { }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);

    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);

    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    this.headerEl.nativeElement.textContent = 'Best Joke Machine';
  }

}
