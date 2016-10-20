// ```
// _activity.router.js
// (c) 2016 David Newman
// david.r.niciforovic@gmail.com
// _activity.router.js may be freely distributed under the MIT license
// ```

// */app/routes/_activity.router.js*

// # Activity API object

// HTTP Verb  Route                   Description

// GET        /api/activity             Get all of the activities
// GET        /api/activity/:activity_id  Get a single activity by activity id
// POST       /api/activity             Create a single activity
// DELETE     /api/activity/:activity_id  Delete a single activity
// PUT        /api/activity/:activity_id  Update a activity with new info

// Load the `activity` model
import Activity from '../models/activity.model';

export default (app, router) => {

  // ## Activity API Routes

  // Define routes for the `activity` API

  router.route('/activity')

    // ### Create a `activity`

    // Accessed at POST http://localhost:8080/api/activity

    // Create a `activity`
    .post((req, res) => {

      Activity.create({

        title : req.body.title,

        dates : req.body.dates,

        tags : req.body.tags,

        rating : req.body.rating,

        description : req.body.description,

        ingredients : req.body.ingredients,

        directions : req.body.directions,

      }, (err, activity) => {

        if (err)
          res.send(err);

        // DEBUG
        console.log(`Activity created: ${activity}`);

        // return the new `activity` to our front-end
        res.json(activity);
      });
    })

    // ### Get all of the `activities`

    // Accessed at GET http://localhost:8080/api/activity
    .get((req, res) => {

      // Use mongoose to get all activities in the database
      Activity.find((err, activity) => {

        if(err)
          res.send(err);

        else
          res.json(activity);
      });
    });

  router.route('/activity/:activity_id')

    // ### Get a `activity` by ID

    // Accessed at GET http://localhost:8080/api/activity/:activity_id
    .get((req, res) => {

      // Use mongoose to fetch a single `activity` by id in the database
      Activity.findOne(req.params.activity_id, (err, activity) => {

        if(err)
          res.send(err);

        else
          res.json(activity);
      });
    })

    // ### Update a `activity` by ID

    // Accessed at PUT http://localhost:8080/api/activity/:activity_id
    .put((req, res) => {

      // use our `activity` model to find the `activity` we want
      Activity.findOne({

        '_id' : req.params.activity_id

      }, (err, activity) => {

        if (err)
          res.send(err);

        // Only update a field if a new value has been passed in
        if (req.body.title)
          activity.title = req.body.title;

        if (req.body.dates)
          activity.dates = req.body.dates;
        
        if (req.body.tags)
          activity.tags = req.body.tags;

        if (req.body.rating)
          activity.rating = req.body.rating;

        if (req.body.creator)
          activity.creator = req.body.creator;

        if (req.body.description)
          activity.description = req.body.description;

        if (req.body.ingredients)
          activity.ingredients = req.body.ingredients;

        if (req.body.directions)
          activity.directions = req.body.directions;

        // save the `activity`
        return activity.save((err) => {

          if (err)
            res.send(err);

          return res.send(activity);

        });
      });
    })

    // ### Delete a `activity` by ID

    // Accessed at DELETE http://localhost:8080/api/activity/:activity_id
    .delete((req, res) => {

      // DEBUG
      console.log(`Attempting to delete activity with id: ${req.params.activity_id}`);

      Activity.remove({

        _id : req.params.activity_id
      }, (err, activity) => {

        if(err)
          res.send(err);

        else
          console.log('Activity successfully deleted!');

        Activity.find((err, activities) => {
          if(err)
            res.send(err);

          res.json(activities);
        });
      });
    });
};
