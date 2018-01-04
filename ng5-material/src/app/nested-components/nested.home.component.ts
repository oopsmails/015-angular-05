import { Component } from '@angular/core';

@Component({
    // selector: 'app-nested-home',
    template: `<h3>Nested Home</h3>
    <a routerLink="1" >Nested Detail 1</a>
    <a routerLink="2" >Nested Detail 2</a>
    <a routerLink="3" >Nested Detail 3</a>
    <hr />
    <router-outlet></router-outlet>
    `
})
export class NestedHomeComponent { }

