// This file contains the main class as well as the necessary
// decorators for creating the  `ActivityDetailComponent`

/*
 * Angular 2 decorators and services
 */

import {Component, OnInit} from 'angular2/core';
import {Activity, ActivityService} from './activity.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

/*
 * Activity
 * Detail Component
 */

@Component({
  // Load our main `Sass` file into our `ActivityDetailComponent`
  styleUrls: [require('!style!css!sass!./activity-detail.component.scss')],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./activity-detail.component.html')
})
export class ActivityDetailComponent implements OnInit, CanDeactivate {

  activity: Activity;
  editName: string;

  constructor(
    private _service: ActivityService,
    private _router: Router,
    private _routeParams: RouteParams
    ) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._service.get(id).then(activity => {
      if (activity) {
        this.editName = activity.name;
        this.activity = activity;
      } else {
        this.gotoList();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (!this.activity || this.activity.name === this.editName) {
      return true;
    }

    return new Promise<boolean>((resolve, reject) => resolve(window.confirm('Discard changes?')));
  }

  cancel() {
    this.editName = this.activity.name;
    this.gotoList();
  }

  save() {
    this.activity.name = this.editName;
    this.gotoList();
  }

  gotoList() {
    this._router.navigate(['ActivityList']);
  }
}
