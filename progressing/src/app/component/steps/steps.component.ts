import { StepComponent, Step } from './step.component';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  @Input() steps: Array<Step>;
  @Output('stepClick') stepClickEitter: EventEmitter<number> = new EventEmitter();

  @ViewChild(StepComponent)
  private stepComponent: StepComponent;

  constructor() {
    if (!this.steps) {
      this.steps = new Array();
    }
  }

  ngOnInit(): void {
    this.steps.forEach((item: Step) => {
      console.log('tdWbSteps, item: ', JSON.stringify(item));
    });
  }

  onStepClick(position: number) {
    console.log('StepsComponent, stepClick, position = ', position);
    this.stepClickEitter.emit(position);
  }

}
