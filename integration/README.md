
ng new integration
cd integration

ng g m core
ng g m shared

ng g c core\components\navbar-bs

npm install --save bootstrap@next

npm i --save @ng-bootstrap/ng-bootstrap

npm i --save @angular/cdk @angular/material @angular/animations hammerjs

----
add icon to navigation bar. Since bootstrap dropped glyphicon, so, we need install 
font-awesome.
49:11: 
1. npm i font-awesome --save
2. import it in our global style sheet, style.css
@import "~font-awesome/css/font-awesome.css";
3. bs-navbar.component.html
<i class="fa fa-leaf" aria-hidden="true"></i>




