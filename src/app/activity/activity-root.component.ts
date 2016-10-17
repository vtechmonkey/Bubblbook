// This file contains the main class as well as the necessary
// decorators for creating the `ActivityRoot` `component`

/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, RouterOutlet} from 'angular2/router';

import {ActivityListComponent} from './activity-list.component';
import {ActivityDetailComponent} from './activity-detail.component';
import {ActivityService} from './activity.service';

/*
 * Activity
 * Root Component
 */
@Component({
  providers: [ActivityService],
  directives: [RouterOutlet],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  {path:'/activity', name: 'ActivityList', component: ActivityListComponent, useAsDefault: true},
  {path:'/activity:id', name: 'ActivityDetail', component: ActivityDetailComponent}
])
export class ActivityRoot {

  constructor() {

  }
}
