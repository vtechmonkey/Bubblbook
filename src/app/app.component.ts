// ```
// app.ts
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// app.ts may be freely distributed under the MIT license
// ```

// *src/app/app.ts*

// This file contains the main class as well as the necessary
// decorators for creating the primary `app` `component`

/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

import {AppState} from './app.service';

import {RouterActive} from './shared/directives/router-active/router-active.directive';

import {Home} from './home';

// Import NgFor directive
import {NgFor} from '@angular/common';

// Import Todo component
import {Todo} from './todo/todo.component';

// Import Activities component
import {Activities} from './activities/activities.component';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [  ],
  directives: [ Todo,
                NgFor,
                RouterActive],
  encapsulation: ViewEncapsulation.None,
  pipes: [],
  // Load our main `Sass` file into our `app` `component`
  styleUrls: [require('!style!css!sass!../sass/main.scss')],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <span>{{ name }}</span>
          <span class="fill"></span>
          <button md-button router-active [routerLink]=" ['Index'] ">
            Index
          </button>
          <button md-button router-active [routerLink]=" ['Home'] ">
            Home
          </button>
          <button md-button router-active [routerLink]=" ['Todo'] ">
            Todo
          </button>
          <button md-button router-active [routerLink]=" ['Activities'] ">
            Activities
          </button>
          
          <button md-button router-active [routerLink]=" ['About'] ">
            About
          </button>           
      </md-toolbar>

      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading">
      </md-progress-bar>

      <router-outlet></router-outlet>

      

      <footer>

      </footer>
    </md-content>
  `
})
@RouteConfig([
  { path: '/', name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  { path: '/todo', component: Todo, name: 'Todo' },
  { path: '/redux', component: Activities, name: 'Activities' },
 
  // Async load a component using Webpack's require with
  // es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
])
export class App {
  angularLogo = 'assets/img/logo.png';
  name = 'BubblBook';
  url = 'https://twitter.com/datatype_void';

  // Pass in our application `state`
  // Alternative to using `redux`
  constructor(public appState: AppState) {}

  // Fire off upon initialization
  ngOnInit() {

    console.log('Initial App State', this.appState.state);
  }
}

/*
 * For help or questions please contact us at @datatype_void on twitter
 * or our chat on Slack at http://www.davidniciforovic.com/wp-login.php?action=slack-invitation
 */
