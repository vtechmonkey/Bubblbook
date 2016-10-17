'use strict';

// import the `mongoose` helper utilities
let utils = require('./utils');
import chai from 'chai';
let should = chai.should();

// import our `Activity` mongoose model
import Activity from '../app/models/activity/activity.model';

describe('Activity: models', () => {

  describe('create()', () => {

    it('should create a new Activity', (done) => {

      // Create a `Activity` object to pass to `Activity.create()``
      let t = {

        text: 'Write better tests... <.<'
      };

      Activity.create(t, (err, createdActivity) => {

        // Confirm that that an error does not exist
        should.not.exist(err);

        // verify that the returned `Activity` is what we expect
        createdActivity.text.should.equal('Write better tests... <.<');

        // Call done to tell mocha that we are done with this test
        done();
      });
    });
  });
});
