import { Component, OnInit } from '@angular/core';
import { Joke } from '@core/models/joke';

@Component({
  selector: 'app-parent',
  template: `
  <joke-list>
    <joke [joke]="joke">
        <span class="setup">{{ joke.setup }}?</span>
        <h1 class="punchline">{{ joke.punchline }}</h1>
    </joke>
    </joke-list>
  `
})
export class JokeListParentComponent {
  // for joke-list component
  joke: Joke = new Joke('A kid threw a lump of cheddar at me', 'I thought ‘That’s not very mature’');
}
