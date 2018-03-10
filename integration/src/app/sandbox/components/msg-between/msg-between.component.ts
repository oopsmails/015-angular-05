import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MsgBetweenService } from 'shared/services/msg-between/msg-between.service';

@Component({
  selector: 'app-msg-between',
  templateUrl: './msg-between.component.html',
  styleUrls: ['./msg-between.component.css']
})
export class MsgBetweenComponent implements OnDestroy {
  msgSubscription: Subscription;
  jsonMsg = '';

  constructor(private msgBetweenService: MsgBetweenService) {
    this.msgSubscription = this.msgBetweenService.getMessage().subscribe((passedInData: { [key: string]: any | Array<any> }) => {
      this.jsonMsg = JSON.stringify(passedInData);
      this.onExport(passedInData.msgData);
    });
  }

  onExport(msgData: { [key: string]: any | Array<any> }): void {
    console.log('jsonMsg=', this.jsonMsg);
  }

  ngOnDestroy(): void {
    this.msgSubscription.unsubscribe();
  }
}
