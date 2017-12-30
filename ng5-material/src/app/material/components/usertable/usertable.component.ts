import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MockHttpClientUserService } from '../../../mock-backend/mock-httpclient-user.service';
import { User, UserService } from '../../../services/user.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent implements OnInit, AfterViewInit {
  loading = false;
  users: Array<User> = new Array();
  dataSource: MatTableDataSource<User>;
  displayedColumns = ['id', 'name', 'email', 'phone', 'company'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService, // could be mocked by interceptor ...
    private mockUserService: MockHttpClientUserService // only for demo purpose
  ) {
    // this.mockUserService.getUsers().subscribe((res: Array<User>) => {
    //   this.loading = true;
    //   console.log('res:', res);
    //   this.users = res;
    //   console.log('this.users:', this.users);
    //   console.log('itemCount:', this.users.length); // always showing empty if put outside
    //   this.dataSource = new MatTableDataSource(this.users);
    //   console.log('1. this.dataSource:', this.dataSource);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    //   this.loading = false;
    // });
  }

  ngOnInit() {
    // NOT working with subscribe in constructor! first time showing empty!
    // this.loading = true;

    // console.log('ngOnInit, this.users:', this.users);
    // this.dataSource = new MatTableDataSource(this.users);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

    // this.loading = false;

    this.userService.getUsers().subscribe((res: Array<User>) => {
      this.loading = true;
      console.log('res:', res);
      this.users = res;
      console.log('this.users:', this.users);
      console.log('itemCount:', this.users.length); // always showing empty if put outside
      this.dataSource = new MatTableDataSource(this.users);
      console.log('1. this.dataSource:', this.dataSource);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      // console.log('2. this.dataSource:', this.dataSource);
      this.loading = false;
    });
  }

  ngAfterViewInit() {
    // following angular material example, https://material.angular.io/components/table/examples
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log('3. this.dataSource:', this.dataSource);

    // this.mockUserService.getUsers().subscribe((res: Array<User>) => {
    //   this.loading = true;
    //   console.log('res:', res);
    //   this.users = res;
    //   console.log('this.users:', this.users);
    //   console.log('itemCount:', this.users.length); // always showing empty if put outside
    //   this.dataSource = new MatTableDataSource(this.users);
    //   console.log('1. this.dataSource:', this.dataSource);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    //   this.loading = false;
    // });
  }

  applyFilter(filterValue: string) { // To override the default filtering behavior, a custom filterPredicate function
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
