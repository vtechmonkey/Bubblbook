// ```
// activities.component.js
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// activities.component.js may be freely distributed under the MIT license
// ```

// # Activities Component

import {Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppStore} from '../app.store';

import {Activity} from './activity.store';
import {ActivityService} from './activity.service';
import {ActivityDetails} from './activity-details.component';
import {ActivityList} from './activity-list.component';

@Component({
  selector: 'activities',
  providers: [],
  template: require('./activities.html'),
  directives: [ActivityList, ActivityDetails],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Activities {

  activities: Observable<Array<Activity>>;

  selectedActivity: Observable<Activity>;

  constructor(private activityService: ActivityService,
              private store: Store<AppStore>) {

    // Bind to the `activities` observable on `ActivityService`
    this.activities = activityService.activities;

    // Bind the `selectedActivity` observable from the store
    this.selectedActivity = store.select('selectedActivity');

    // DEBUG
    this.selectedActivity.subscribe(v => console.log(v));

    // `activityService.loadActivities` dispatches the `ADD_ACTIVITIES` event
    // to our store which in turn updates the `activities` collection
    activityService.loadActivities();
  }

  selectActivity(activity: Activity) {

    this.store.dispatch({

      type: 'SELECT_ACTIVITY',
      payload: activity
    });
  }

  deleteActivity(activity: Activity) {

    this.activityService.deleteActivity(activity);
  }

  resetActivity() {

    let emptyActivity: Activity = {

      _id: null,
      dates:[],
      tags: [],
      title: '',
      description: '',
      rating: null,
      creator: '',
      ingredients: [],
      directions: []
    };

    this.store.dispatch({

      type: 'SELECT_ACTIVITY',
      payload: emptyActivity
    });
  }

  saveActivity(activity: Activity) {

    this.activityService.saveActivity(activity);
    this.resetActivity();
  }
}
