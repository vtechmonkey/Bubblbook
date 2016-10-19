import {activities} from './activities.reducer';

import {selectedActivity} from './selected-activity.reducer';

import {
  it,
  describe,
  expect
} from '@angular/core/testing';

describe('Activities', () => {
  describe('`selectedActivity` store', () => {
    it('returns null by default', () => {
      let defaultState = selectedActivity(undefined, {type: 'random', payload: {}});

      expect(defaultState).toBeNull();
    });

    it('`SELECT_ACTIVITY` returns the provided payload', () => {
      let selectActivity = selectedActivity(undefined, {type: 'SELECT_ACTIVITY', payload: 'payload'});

      expect(selectActivity).toBe('payload');
    });
  });

  describe('`activities` store', () => {
    let initialState = [
      { _id: 0, name: 'First Activity' },
      { _id: 1, name: 'Second Activity' }
    ];

    it('returns an empty array by default', () => {
      let defaultState = activities(undefined, {type: 'random', payload: {}});

      expect(defaultState).toEqual([]);
    });

    it('`ADD_ACTIVITIES`', () => {
      let payload = initialState,
          stateItems = activities([], {type: 'ADD_ACTIVITIES', payload: payload});

      expect(stateItems).toEqual(payload);
    });

    it('`CREATE_ACTIVITY`', () => {
      let payload = {_id: 2, name: 'added activity'},
          result = [...initialState, payload],
          stateItems = activities(initialState, {type: 'CREATE_ACTIVITY', payload: payload});

      expect(stateItems).toEqual(result);
    });

    it('`UPDATE_ACTIVITY`', () => {
      let payload = { _id: 1, name: 'Updated Activity' },
          result = [ initialState[0], { _id: 1, name: 'Updated Activity' } ],
          stateItems = activities(initialState, {type: 'UPDATE_ACTIVITY', payload: payload});

      expect(stateItems).toEqual(result);
    });

    it('`DELETE_ACTIVITY`', () => {
      let payload = { _id: 0 },
          result = [ initialState[1] ],
          stateItems = activities(initialState, {type: 'DELETE_ACTIVITY', payload: payload});

      // DEBUG
      console.log('result: ');
      console.log(result);

      expect(stateItems).toEqual(result);
    });
  });
});
