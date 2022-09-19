const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ClientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Array, required: true },
  psy: { type: Schema.Types.ObjectId, ref: "Psy" },
});

const Client = model("Client", ClientSchema);

module.exports = Client;
