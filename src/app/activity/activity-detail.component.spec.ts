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
import {ActivityDetailComponent} from './activity-detail.component';
import {Router, RouteParams} from 'angular2/router';
import {Activity, ActivityService} from './activity.service';

class MockActivityService {
  get() { return Promise.resolve(new Activity(1, 'one')); }
}

class MockRouter {
  navigate() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('ActivityDetailComponent', () => {

  beforeEachProviders(() => [
    provide(ActivityService, {useClass: MockActivityService}),
    provide(Router, {useClass: MockRouter}),
    provide(RouteParams, {useClass: MockRouteParams}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(ActivityDetailComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
