
https://coursetro.com/posts/code/113/How-to-Build-an-Angular-5-Material-App



-- ng new ng5-material --style=scss --routing

The two flags we added at the end specify that we want the CSS to use the Sass compiler, and --routing tells the CLI to provide us with the routing scaffolding.



-- npm install --save @angular/material @angular/cdk

-- npm install --save @angular/animations


-- /src/app/app.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

imports: [
...,
BrowserAnimationsModule
],

-- material.module.ts 

-- app.module.ts, import MaterialModule

-- /src/styles.css

@import "~@angular/material/prebuilt-themes/indigo-pink.css";

-- npm install --save hammerjs

-- /src/main.ts
import 'hammerjs';
or:
-- angular-cli.json

"scripts": [
  "../node_modules/hammerjs/hammer.min.js"
],


-- /src/index.html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


-- /src/app/app.component.html 


































