// This file contains the main class as well as the necessary
// decorators for creating the  `ActivityListComponent`

/*
 * Angular 2 decorators and services
 */
import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';
import {Activity, ActivityService} from './activity.service';

/*
 * Activity
 * List Component
 */
@Component({
  directives: [],
  // Load our main `Sass` file into our `ActivityListComponent`
  styleUrls: [require('!style!css!sass!./activity-list.component.scss')],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./activity-list.component.html')
})
export class ActivityListComponent implements OnInit {

  activitys: Activity[];

  constructor(private _service: ActivityService) {

  }

  ngOnInit() {
    this._service
          .getAll()
            .then(activitys => this.activitys = activitys);
  }
}
