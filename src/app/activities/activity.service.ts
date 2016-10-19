// ```
// activity.service.js
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// activity.service.js may be freely distributed under the MIT license
// ```

// # Activity Service

import {Http, Headers} from '@angular/http';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Activity} from './activity.store';
import {AppStore} from '../app.store';

const HEADER = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ActivityService {

  activities: Observable<Array<Activity>>;

  // Inject the `AppStore` into the constructor with a type of `AppStore`
  constructor(private http: Http, private store: Store<AppStore>) {

    // Bind an observable of our `activities` to `ActivityService`
    // Since this is essentially a `key, value` system, we can
    // set our `activities` by calling `store.select('activities')`
    this.activities = store.select('activities');
  }

  loadActivities() {

        this.http.get('/api/activity')
            // map the `HTTP` response from `raw` to `JSON` format
            // using `RxJs`
            // Reference: https://github.com/Reactive-Extensions/RxJS
            .map(res => res.json())
            // call `map` again to create the object we want to dispatch
            // to our reducer
            // This combo of `map` method calls is an observable sequence
            // in that every result gets passed through this sequence of
            // operations
            .map(payload => ({ type: 'ADD_ACTIVITIES', payload }))
            // Subscribe to this sequence and hand off control to the
            // reducer by dispatching the transformed results
            .subscribe(action => this.store.dispatch(action));
    }

    saveActivity(activity: Activity) {

        (activity._id) ? this.updateActivity(activity) : this.createActivity(activity);
    }

    createActivity(activity: Activity) {

        this.http.post('/api/activity', JSON.stringify(activity), HEADER)
            .map(res => res.json())
            .map(payload => ({ type: 'CREATE_ACTIVITY', payload }))
            .subscribe(action => this.store.dispatch(action));
    }

    updateActivity(activity: Activity) {

        this.http.put(`/api/activity/${activity._id}`, JSON.stringify(activity), HEADER)
          // Dispatch action to reducer in subscribe block here
          .subscribe(action => this.store.dispatch({ type: 'UPDATE_ACTIVITY', payload: activity }));
    }

    deleteActivity(activity: Activity) {

        this.http.delete(`/api/activity/${activity._id}`)
          .subscribe(action => this.store.dispatch({ type: 'DELETE_ACTIVITY', payload: activity }));
    }
}
