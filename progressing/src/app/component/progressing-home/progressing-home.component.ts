import { Component, OnInit } from '@angular/core';
import { Card } from '../card-hosting/card-hosting.component';
import { Step } from '../steps/step.component';
import { PageClickEventArgs } from '../pagination/pagination.component';
import { FavoriteChangedEventArgs } from '../favorite/favorite.component';

@Component({
  selector: 'app-progressing-home',
  templateUrl: './progressing-home.component.html',
  styleUrls: ['./progressing-home.component.css']
})
export class ProgressingHomeComponent implements OnInit {
  title = 'app';
  post = {
    title: 'Title',
    isFavorite: true
  };

  pageNumber: number;
  itemCount: number;
  itemsPerPage: number;
  numberOfPageCombine: number;
  backgroundType: string;
  hiddenArrows: boolean;
  disableNavigation: boolean;

  steps: Array<Step> = new Array();

  cards: Array<Card> = new Array();

  ngOnInit(): void {
    this.pageNumber = 0;
    this.itemCount = 55;
    this.itemsPerPage = 5;
    this.numberOfPageCombine = 1; // multiple pages combined
    this.backgroundType = 'light';
    this.hiddenArrows = false;
    this.disableNavigation = false;

    Array.from(Array(5).keys()).forEach(i => {
      const step: Step = {
        active: i % 2 === 0 ? true : false,
        complete: i % 2 === 0 ? true : false,
        first: i % 2 === 0 ? true : false,
        last: i % 2 === 0 ? true : false,
        selectable: i % 2 === 0 ? true : false,
        stepId: '' + (i + 1),
        stepDescription: 'Step ' + (i + 1),
        position: i
      };
      this.steps.push(step);
    });

    this.cards = [
      new Card('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
      new Card('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
      new Card('A kid threw a lump of cheddar at me', 'I thought ‘That’s not very mature’'),
    ];
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed: ', eventArgs);
  }

  onPageClick(pageClickEventArgs: PageClickEventArgs): void {
    console.log('onPageClick, pageClickEventArgs: ', pageClickEventArgs);
  }

  onPageClick2(indexRet: number[]): void {
    indexRet.forEach((item: number) => {
      console.log('pageClick, index array: ', item);
    });
  }

  stepClick(e) {
    console.log('stepClick: ', e);
  }


}
