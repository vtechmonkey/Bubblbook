import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {provide} from 'angular2/core';
import {ActivityService} from './activity.service';

describe('ActivityService', () => {

  beforeEachProviders(() => [ActivityService]);

  it('should get all Activitys', inject([ActivityService], (activityService:ActivityService) => {
    activityService.getAll().then(activitys => expect(activitys.length).toBe(3));
  }));

  it('should get one Activity', inject(ActivityService], (activityService:ActivityService) => {
    activityService.get(1).then(activity => expect(activity.id).toBe(1));
  }));

});
