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
  ChangeDetectionStrategy
} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {ActivityService} from './activity.service';
import {Activity} from './activity.store';
import {AppStore} from '../app.store';

import {Rating} from './rating.component';

@Component({
  selector: 'activity-detail',
  template: require('./activity-details.html'),
  directives: [Rating]
})
export class ActivityDetails {

  originalTitle: string;
  selectedActivity: Activity;

  // Assign our `activity` to a locally scoped property
  // Perform additional logic on every update via ES6 setter
  // Create a copy of `_activity` and assign it to `this.selectedActivity`
  // which we will use to bind our form to
  @Input('activity') set _activity(value: Activity) {

    if (value) this.originalTitle = value.title;
    this.selectedActivity = Object.assign({}, value);

    // DEBUG
    console.log('this.selectedActivity: ');
    console.log(this.selectedActivity);
  }

  // Allow the user to save/delete a `activity or cancel the
  // operation. Flow events up from here.
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() {

  }
    newDate() {

    // blank `tag` object
    let date = {
      name: ''
    };

    // Check to see if the `tags` array exists before
    // attempting to push a `tag` to it
    if (!this.selectedActivity.dates)
      this.selectedActivity.dates = [];

    this.selectedActivity.dates.push(date);
  }


  // Whenever the user needs to add a new `tag`, push an
  // empty `tag` object to the `tags` array on the
  // `selectedActivity`
  newTag() {

    // blank `tag` object
    let tag = {
      name: ''
    };

    // Check to see if the `tags` array exists before
    // attempting to push a `tag` to it
    if (!this.selectedActivity.tags)
      this.selectedActivity.tags = [];

    this.selectedActivity.tags.push(tag);
  }

  // Whenever the user needs to add a new `ingredient`, push an
  // empty `ingredient` object to the `ingredient` array on the
  // `selectedActivity`
  newIngredient() {

    // blank `ingredient` object
    let ingredient = {
      amount: '',
      unit: '',
      name: ''
    };

    // Check to see if the `ingredients` array exists before
    // attempting to push an `ingredient` to it
    if (!this.selectedActivity.ingredients)
      this.selectedActivity.ingredients = [];

    this.selectedActivity.ingredients.push(ingredient);
  }

  // Whenever the user needs to add a new `direction`, push an
  // empty `direction` object to the `direction` array on the
  // `selectedActivity`
  newDirection() {

    // blank `direction` object
    let direction = {
      step: ''
    };

    // Check to see if the `directions` array exists before
    // attempting to push a `direction` to it
    if (!this.selectedActivity.directions)
      this.selectedActivity.directions = [];

    this.selectedActivity.directions.push(direction);
  }

  onUpdate(value) {

    // Set the value of the selected activity's rating to the
    // value passed up from the `rating` component
    this.selectedActivity.rating = value;
  }

  deleteTag(tag) {
    // loop through all of the `tags` in the `selectedActivity`
    for (let i = 0; i < this.selectedActivity.tags.length; i++) {
      // if the `tag` at the current index matches that of the one
      // the user is trying to delete
      if (this.selectedActivity.tags[i] === tag) {
        // delete the `tag` at the current index
        this.selectedActivity.tags.splice(i, 1);
      }
    }
  }

  deleteIngredient(ingredient) {
    // loop through all of the `ingredients` in the `selectedActivity`
    for (let i = 0; i < this.selectedActivity.ingredients.length; i++) {
      // if the `ingredient` at the current index matches that of the one
      // the user is trying to delete
      if (this.selectedActivity.ingredients[i] === ingredient) {
        // delete the `ingredient` at the current index
        this.selectedActivity.ingredients.splice(i, 1);
      }
    }
  }

  deleteDirection(step) {
    // loop through all of the `directions` in the `selectedActivity`
    for (let i = 0; i < this.selectedActivity.directions.length; i++) {
      // if the `direction` at the current index matches that of the one
      // the user is trying to delete
      if (this.selectedActivity.directions[i] === step) {
        // delete the `direction` at the current index
        this.selectedActivity.directions.splice(i, 1);
      }
    }
  }
}
