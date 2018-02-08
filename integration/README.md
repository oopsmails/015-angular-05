
Sandbox:
ng g m sandbox
ng g c sandbox\components\parent
ng g s shared\services\data-provider
ng g c sandbox\components\live-data
ng g c sandbox\components\view-child\joke-list

parent: parent

live-data: ChangeDetectorRef
https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f

joke-list: @ViewChild, https://codecraft.tv/courses/angular/components/viewchildren-and-contentchildren/
http://www.thetechieshouse.com/use-angular-4-viewchild-5-minutes/



====================================================
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

----

navbar-bs:

-- routerLink not working: 
need to add RouterModule.forChild([]) in core.module.ts, because using routerLink="...".

-- dropdown not working: 
need to add NgbModule.forRoot().ngModule in shared.module.ts and then add SharedModule
in core.module.ts, because 
<div ngbDropdownMenu ...


