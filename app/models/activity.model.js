// ```
// activity.model.js
// activity.model.js may be freely distributed under the MIT license
// ```

// */app/models/activity/activity.model.js*

// ## Activity Model

// Note: MongoDB will autogenerate an _id for each Activity object created

// Grab the Mongoose module
import mongoose from 'mongoose';

// Create a `schema` for the `Activity` object
let activitySchema = new mongoose.Schema({
  text: { type : String }
});

// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)
export default mongoose.model('Activity', activitySchema);
