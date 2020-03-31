// Array methods to study
// * map
// * filter
// * reduce
// * some

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date()
  },
  // totalDuration: (from virtual)
  exercises: [{
    type: {
      type: String,
      required: "Enter a exercise type"
    },
    name: {
      type: String,
      required: "Enter an ecercise name"

    },
    distance: {
      type: Number,
    },
    duration: {
      type: Number,
      required: "Enter duration in Minutes"
    },
    weight: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
  }]
}, {
  toJSON: {
    virtuals: true
  }
});

workoutSchema.virtual('totalDuration').get(function () {
  /*
[
{
  duration: 5
},
{
  duration: 8
},
{
  duration: 3
},
]
 total = 0
 total  += exercises[i].duration
    total += 5
    0 = 0 + 5
    total === 5
 
  total  += exercises[i].duration
    total += 8
    5 = 5 + 8
    total === 13

  total  += exercises[i].duration
    total += 3
    13 = 13 + 3
    total === 16

  */
  var totalDuration = 0;
  for (var i = 0; i < this.exercises.length; i++) {
    totalDuration += this.exercises[i].duration
  }

  return totalDuration;
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;