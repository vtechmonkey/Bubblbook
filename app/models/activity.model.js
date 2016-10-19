// ```
// activity.model.js
// (c) 2016 David Newman
// david.r.niciforovic@gmail.com
// activity.model.js may be freely distributed under the MIT license
// ```

// */app/models/activity.model.js*

// # Activity Model

// Note: MongoDB will autogenerate an _id for each Activity object created

// Grab the Mongoose module
import mongoose from 'mongoose';

// Create a `schema` for the `Todo` object
let activitySchema = new mongoose.Schema({
  title: { type : String },
  dates: { type: Array },
  tags: { type: Array },
  rating: { type: Number},
  creator: { type: String},
  description: { type : String },
  ingredients: [{
    amount: {
      type: String
    },

    unit: {
      type: String
    },

    name: {
      type: String
    }
  }],
  directions: { type: Array }
});

// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)
export default mongoose.model('Activity', activitySchema);
