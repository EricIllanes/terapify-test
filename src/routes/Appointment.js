const { Router } = require("express");
const router = Router();
const Client = require("../models/Client.js");
const Psy = require("../models/Psy.js");
const Hours = require("../models/Hours.js");
const Appointment = require("../models/Appointment.js");
const e = require("express");

router.get("/appointment", async (req, res) => {
  try {
    const appointment = await Appointment.find({})
      .populate("psy")
      .populate("client");
    res.send(appointment);
  } catch (error) {
    console.error(error);
  }
});

router.post("/appointment", async (req, res) => {
  const { date, hour, psyID, clientID } = req.body;
  const psyFind = await Psy.findById(psyID);
  const clientFind = await Client.findById(clientID);
  let checkAvailable = await Hours.find({
    schedule: { $elemMatch: { day: date, intHour:hour } },
  });
  console.log('Probanding', checkAvailable)
 if(checkAvailable.length===0){
  res.status(404).send('No hay horas disponibles en ese horario, intenta con otro')
 } else {
  // const appointment= new Appointment({date, hour, psy:psyFind._id, client:clientFind._id})
  // await appointment.save()
  // clientFind.appointment= clientFind.appointment.concat(appointment._id)
  // await clientFind.save()
  // res.json(appointment)
  res.send(checkAvailable);

 }

});

module.exports = router;
