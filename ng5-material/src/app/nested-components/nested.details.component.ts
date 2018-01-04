import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `<h3>Nested Detail Page {{ id }}</h3>
    `
})
export class NestedDetailsComponent {
    id = '';
    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    }
}
