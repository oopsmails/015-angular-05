import { UsernameValidators } from '../../common/validators/username.validator';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
        accountNumber: new FormControl(''),
        passCode: new FormControl('')
      }
    ),

    username: new FormControl('', 
                  [
                    Validators.required,
                    Validators.minLength(3),
                    UsernameValidators.cannotContainSpace
                  ], 
                  UsernameValidators.shouldBeUnique
  ),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

  get accountNumber() {
    return this.form.get('account.accountNumber');
  }

  login() {
    /* example
    let isValid = authService.login(this.form.value);
    if (!isValid) {
      this.form.setErrors({
        invalidLogin: true
      });
      // this.username.setErrors;
    }
    */

    this.form.setErrors({
      invalidLogin: true
    });
  }
}
