const router = require("express").Router();
const Workout = require('../models/workout');

router.post("/workouts", ({
  body
}, res) => {
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
  Workout.findByIdAndUpdate(req.params.id, {
      $push: {
        exercises: body
      }
    }, {
      new: true,
      runValidators: true
    })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workouts", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})


router.get("/workouts/range", (req,res)=>{
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