// Import our `Activity` store
import {Activity} from './activities/activity.store';

// We are dealing with a single object that has:
//   * An `activities` collection
//   * A `selectedActivity` property holding a single `Activity`
export interface AppStore {

    activities: Activity[];
    selectedActivity: Activity;

    // If ever you were to desire more functionality, you
    // could expand the `store` with new `key, value` pairs
    // to accomodate the updated model
    //
    // . . .
    //
};
