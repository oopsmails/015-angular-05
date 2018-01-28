import { Component, OnInit } from '@angular/core';
import { Joke } from '@core/models/joke';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // for data-live component
  live = true;
  live2 = true;
}
