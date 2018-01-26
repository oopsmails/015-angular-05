import { DataProviderService } from 'shared/services/data-provider.service';
import { Component, OnInit, ChangeDetectorRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'live-data2',
  template: `Data(live-date2): {{ dataProvider.data }}`,
  styleUrls: ['./live-data.component.css']
})
export class LiveData2Component {

  @Input()
  set live(value) {
    if (value) {
      this.ref.reattach();
    } else {
      this.ref.detach();
    }
  }

  constructor(private ref: ChangeDetectorRef, private dataProvider: DataProviderService) { }
}
