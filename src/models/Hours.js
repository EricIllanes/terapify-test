const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const HoursSchema = new Schema({
  day: { type: String, required: true },
  hour: { type: String, required: true },
  timeBreak: { type: String, required: true },
  psy: [{ type: Schema.Types.ObjectId, ref: "Psy" }],
});

const Hours = model("Hours", HoursSchema);

module.exports = Hours;
