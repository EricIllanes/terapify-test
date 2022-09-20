const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ClientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  appointment: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
  psy: { type: Schema.Types.ObjectId, ref: "Psy" },
});

const Client = model("Client", ClientSchema);

module.exports = Client;
