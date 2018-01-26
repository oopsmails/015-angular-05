import { DataProviderService } from 'shared/services/data-provider.service';
import { Component, OnInit, ChangeDetectorRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'live-data',
  template: `Data: {{ dataProvider.data }}`,
  styleUrls: ['./live-data.component.css']
})
export class LiveDataComponent implements OnInit, OnChanges {
  @Input() live: boolean;

  constructor(private ref: ChangeDetectorRef, private dataProvider: DataProviderService) { }

  // @Input()
  // set live(value) {
  //   if (value) {
  //     this.ref.reattach();
  //   } else {
  //     this.ref.detach();
  //   }
  // }

  ngOnInit(): void {
    console.log('ngOnInit: ', this.live);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: ', changes);
    if (this.live) {
      console.log('ngOnChanges: ', this.live);
      this.ref.reattach();
    } else {
      console.log('ngOnChanges: ', this.live);
      this.ref.detach();
    }
  }

}
