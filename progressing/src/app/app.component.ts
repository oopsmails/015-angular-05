import { PageClickEventArgs } from './component/pagination/pagination.component';
import { Component, OnInit } from '@angular/core';
import { FavoriteChangedEventArgs } from './component/favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  post = {
    title: "Title",
    isFavorite: true
  }

  pageNumber: number;
  itemCount: number;
  itemsPerPage: number;
  numberOfPageCombine: number;
  backgroundType: string;
  hiddenArrows: boolean;
  disableNavigation: boolean;

  ngOnInit(): void {
    this.pageNumber = 0;
    this.itemCount = 33;
    this.itemsPerPage = 5;
    this.numberOfPageCombine = 3;
    this.backgroundType = 'light';
    this.hiddenArrows = false;
    this.disableNavigation = false;
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs);
  }

  onPageClick(pageClickEventArgs: PageClickEventArgs) {
    console.log('onPageClick, pageClickEventArgs: ', pageClickEventArgs);
  }
  
}
