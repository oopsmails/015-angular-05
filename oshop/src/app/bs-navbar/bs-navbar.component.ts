import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    // afAuth.authState.subscribe(user => this.user = user);
    this.user$ = afAuth.authState;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
