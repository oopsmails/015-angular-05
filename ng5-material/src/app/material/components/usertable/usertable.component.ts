import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { User, UserService } from '../../../services/user.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent implements OnInit {
  users: Array<User> = new Array();
  dataSource: MatTableDataSource<User>;
  displayedColumns = ['id', 'name', 'email', 'phone', 'company'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService) { }

  ngOnInit() {
    const tempUsers = new Array<User>();
    this.userService.getUsers().subscribe((res: Array<User>) => {
      this.users = res;
      console.log('itemCount:', this.users.length); // always showing empty if put outside
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) { // To override the default filtering behavior, a custom filterPredicate function
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
