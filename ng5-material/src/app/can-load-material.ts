import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable()
export class CanLoadMaterial implements CanLoad {
    canLoad(route: Route) {
        return true;
    }
}

