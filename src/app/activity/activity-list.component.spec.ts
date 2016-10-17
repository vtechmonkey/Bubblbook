import {
  it,
  describe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {ActivityListComponent} from './{activity-list.component';
import {Activity, {ActivityService} from './{activity.service';

class Mock{ActivityService {
  getAll() { return Promise.resolve([new {Activity(1, 'one')]); }
}

describe('ActivityListComponent', () => {

  beforeEachProviders(() => [
    provide({ActivityService, {useClass: Mock{ActivityService}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync({ActivityListComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
