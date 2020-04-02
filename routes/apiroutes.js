const router = require("express").Router();
const Workout = require('../models/workout');

router.post("/workouts", (req, res) => {
  console.log("HERE")
  Workout.create({})
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
});

router.put("/workouts/:id", (req, res) => {
  console.log(req.params, req.body)
  Workout.findByIdAndUpdate(req.params.id, {
      $push: {
        exercises: req.body
      }
    }, {
      new: true,
      runValidators: true
    })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
});

router.get("/workouts", (req, res) => {
  console.log("Here")
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
})

//Workout.find({}).sort({day: -1}).limit(10).then(...)
router.get("/workouts/range", (req, res) => {
  Workout.find({})
    .limit(10)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

module.exports = router;