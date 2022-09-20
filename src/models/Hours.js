const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const HoursSchema = new Schema({
  day: { type: String, required: true },
  schedule:[
    {'08:00-09:00': {type: Boolean, default: false}},
    {'09:00-10:00': {type: Boolean, default: false}},
    {'10:00-11:00': {type: Boolean, default: false}},
    {'11:00-12:00': {type: Boolean, default: false}},
    {'12:00-13:00': {type: Boolean, default: false}},
    {'13:00-14:00': {type: Boolean, default: false}},
    {'14:00-15:00': {type: Boolean, default: false}},
    {'15:00-16:00': {type: Boolean, default: false}},
    {'16:00-17:00': {type: Boolean, default: false}},
    {'17:00-18:00': {type: Boolean, default: false}},
    {'18:00-19:00': {type: Boolean, default: false}},
    {'19:00-20:00': {type: Boolean, default: false}},
  ],
  timeBreak: { type: String, required: true },
  psy: [{ type: Schema.Types.ObjectId, ref: "Psy" }],
});

const Hours = model("Hours", HoursSchema);

module.exports = Hours;
