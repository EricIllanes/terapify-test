const mongoose = require("mongoose");
const router = require("../routes/Hours");
const { Schema, model } = mongoose;

const AppointmentSchema = new Schema({
    date: { type: String, required: true },
    hour: { type: String, required: true },
    psy: { type: Schema.Types.ObjectId, ref: "Psy" },
    client: { type: Schema.Types.ObjectId, ref: "Client" },
});

const Appointment = model("Appointment", AppointmentSchema);

router.exports=Appointment;