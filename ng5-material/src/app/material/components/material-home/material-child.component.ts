import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `<h2>Router Level 1 Detail {{ id }}</h2>
    <a routerLink="nested" >To Nested Items Home</a>
    <hr />
    <router-outlet></router-outlet>
    `
})
export class MaterialChildComponent {
    id = '';
    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    }
}
