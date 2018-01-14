import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-bs',
  templateUrl: './navbar-bs.component.html',
  styleUrls: ['./navbar-bs.component.css']
})
export class NavbarBsComponent implements OnInit {

  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

}
