import { Component, OnInit } from '@angular/core';
import { MockStock } from '../../../mock-backend/mock-backend-stock';
import { MockHttpClientStockService } from '../../../mock-backend/mock-httpclient-stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stocks: Array<MockStock> = new Array();
  allStocks: Array<MockStock> = new Array();

  constructor(private httpService: MockHttpClientStockService) { }

  ngOnInit() {
    this.httpService.getStocks().subscribe(res => {
      this.allStocks = res;
      console.log('this.allStocks.length:', this.allStocks.length);
    });
  }

}
