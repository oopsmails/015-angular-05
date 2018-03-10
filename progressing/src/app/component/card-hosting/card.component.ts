import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Card } from './card-hosting.component';

@Component({
    selector: 'app-card',
    template: `
  <div class="card card-block"
        appCardhover
        [mouseOverColor]="true"
        [applicationLoading]="this.isLoading">
    <h4 class="card-title">{{ card.title }}</h4>
    <p class="card-text"
       [style.display]="'none'">{{ card.text }}</p>
  </div>
    `
})
export class CardComponent implements OnInit, OnDestroy {
    @Input() card: Card;

    private sub: Subscription;
    private isLoading: boolean;

    ngOnInit(): void {
        this.sub = Observable.interval(2000)
        .subscribe((val) => {
            // console.log('called');
            this.isLoading = !this.isLoading;
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
