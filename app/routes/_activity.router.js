// ```
// _activity.route.js
// (c) 2016 David Newman
// david.r.niciforovic@gmail.com
// _activity.route.js may be freely distributed under the MIT license
// ```

// */app/routes/activity/_activity.router.js*

// ## Activity API object

// GET | /api/activity | Get all of the Activity items
// GET | /api/activity/:activity_id |Get a single Activity item by Activity item id
// POST | /api/activity | Create a single Activity item
// DELETE | /api/activity/:activity_id | Delete a single Activity item
// PUT | /api/activity/:activity_id | Update a Activity item with new info

// Load the `Activity` model
import Activity from '../models/activity.model';

export default (app, router) => {

  // ### Activity API Routes

  // Define routes for the Activity item API

  router.route('/activity')

    // ### Create a Activity item

    // Accessed at POST http://localhost:8080/api/activity

    // Create a Activity item
    .post((req, res) => {

      Activity.create({

        text : req.body.text

      }, (err, activity) => {

        if (err)
          res.send(err);

        // DEBUG
        console.log(`Activity created: ${activity}`);

        Activity.find((err, activitys) => {
          if(err)
            res.send(err);

          res.json(activitys);
        });
      });
    })

    // ### Get all of the Activity items

    // Accessed at GET http://localhost:8080/api/activity
    .get((req, res) => {

      // Use mongoose to get all Activity items in the database
      Activity.find((err, activity) => {

        if(err)
          res.send(err);

        else
          res.json(activity);
      });
    });

  router.route('/activity/:activity_id')

    // ### Get a Activity item by ID

    // Accessed at GET http://localhost:8080/api/activity/:activity_id
    .get((req, res) => {

      // Use mongoose to a single Activity item by id in the database
      Activity.findOne(req.params.camelized_id, (err, activity) => {

        if(err)
          res.send(err);

        else
          res.json(activity);
      });
    })

    // ### Update a Activity item by ID

    // Accessed at PUT http://localhost:8080/api/activity/:activity_id
    .put((req, res) => {

      // use our Activity model to find the Activity item we want
      Activity.findOne({

        '_id' : req.params.activity_id

      }, (err, activity) => {

        if (err)
          res.send(err);

        // Only update a field if a new value has been passed in
        if (req.body.text)
          activity.text = req.body.text;

        // save the Activity item
        return activity.save((err) => {

          if (err)
            res.send(err);

          return res.send(activity);

        });
      });
    })

    // ### Delete a Activity item by ID

    // Accessed at DELETE http://localhost:8080/api/activity/:activity_id
    .delete((req, res) => {

      // DEBUG
      console.log(`Attempting to delete activity with id: ${req.params.activity_id}`);

      Activity.remove({

        _id : req.params.activity_id
      }, (err, activity) => {

        if(err)
          res.send(err);

        console.log('Activity successfully deleted!');

        Activity.find((err, activitys) => {
          if(err)
            res.send(err);

          res.json(activitys);
        });
      });
    });
};
