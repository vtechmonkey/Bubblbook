// ```
// activity-list.component.js
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// activity-list.component.js may be freely distributed under the MIT license
// ```

// # Activity List

import {Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {ActivityService} from './activity.service';
import {Activity} from './activity.store';
import {AppStore} from '../app.store';

import {Rating} from './rating.component';

@Component({
  selector: 'activity-list',
  template: require('./activity-list.html'),
  directives: [Rating]
})
export class ActivityList {
  // The `activity` component hands off `activities` and `selectedactivity`
  // via property bindings to its child components
  // Here we pick up the `activities` collection by annotating our local
  // `activities` property with `@Input()`
  @Input() activities: Activity[];
  // Two event outputs for when a activity is selected or deleted
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
