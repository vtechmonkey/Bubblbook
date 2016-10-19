// ```
// selected-activity.reducer.js
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// selected-activity.reducer.js may be freely distributed under the MIT license
// ```

// # Redux interface/reducer for `activities`

// The `selected activity` reducer handles the currently
// selected activity
export const selectedActivity = (state: any = null, {type, payload}) => {

  // DEBUG
  console.log('selected activity reducer hit! type: ');
  console.log(type);
  console.log('payload: ');
  console.log(payload);
  console.log('state: ');
  console.log(state);

  switch (type) {

    // When an `event` from our store is dispatched with an action
    // type of `SELECT_ACTIVITY`, it will hit this switch case
    case 'SELECT_ACTIVITY':
      return payload;

    default:
      return state;
  }
};
