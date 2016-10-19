// ```
// activities.reducer.js
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// activities.reducer.js may be freely distributed under the MIT license
// ```

// ** Import our `activity` store
import {Activity} from './activity.store';

// # Redux reducer for `activities`

// A traditional `reducer` is a function which takes a `state`
// object and an action to perform.

// `ngrx` reducers work differently:
//   * the second parameter is an object with the type of
//     action to perform and the payload for that action

// The `activities` reducer performs actions on our list of `activities`
// Notice that we set `state` to a default value to initialize
// smoothly
export const activities = (state: any = [], {type, payload}) => {

  // DEBUG
  console.log('Activities reducer hit! type: ');
  console.log(type);
  console.log('payload: ');
  console.log(payload);
  console.log('state: ');
  console.log(state);

  switch (type) {

    // `ADD_ACTIVITIES` returns whatever collection passed in as a
    // new array
    case 'ADD_ACTIVITIES':
      return payload;

    // `CREATE_ACTIVITY` returns a new array by concatenating the
    // existing activity array with our new activity
    case 'CREATE_ACTIVITY':
      return [...state, payload];

    // `UPDATE_ACTIVITY` returns a new array by mapping to the current
    // array, locating the activity to update and cloning to create
    // a new object using `Object.assign`
    case 'UPDATE_ACTIVITY':
      return state.map(activity => {

        return activity._id === payload._id
          ? Object.assign({}, activity, payload) : activity;
      });

    // `DELETE_ACTIVITY` returns a new array by filtering out the
    // `activity` that we want to delete
    case 'DELETE_ACTIVITY':

      return state.filter(activity => {

        return activity._id !== payload._id;
      });

    default:
      return state;
  }
};
