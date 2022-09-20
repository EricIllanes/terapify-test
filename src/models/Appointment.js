const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AppointmentSchema = new Schema({
    date: { type: String, required: true },
    hour: { type: String, required: true },
    psyID: { type: Schema.Types.ObjectId, ref: "Psy" },
    clientID: { type: Schema.Types.ObjectId, ref: "Client" },
});

const Appointment = model("Appointment", AppointmentSchema);

module.exports=Appointment;