const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const HoursSchema = new Schema({
  day: { type: String, required: true },
  workingPlan:{type: Object, required: true},
  schedule:{type: Array},
  timeBreak: { type: Array, required: true },
  psy: [{ type: Schema.Types.ObjectId, ref: "Psy" }],
});

const Hours = model("Hours", HoursSchema);

module.exports = Hours;
