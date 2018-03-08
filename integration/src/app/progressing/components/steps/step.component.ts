import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Step {
  active?: boolean;
  complete?: boolean;
  first?: boolean;
  last?: boolean;
  selectable?: boolean;

  stepId: string;
  stepDescription: string;
  position: number;
}


@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepComponent {
  @Input('isActive') active: boolean;
  @Input('isComplete') complete: boolean;
  @Input('isFirst') first: boolean;
  @Input('isLast') last: boolean;
  @Input('isSelectable') selectable: boolean;

  @Input() stepId = '';
  @Input() stepDescription = '';
  @Input() position = 0;

}
