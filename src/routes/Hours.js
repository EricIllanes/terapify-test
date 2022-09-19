const { Router } = require("express");
const router = Router();
const Client = require("../models/Client.js");
const Psy = require("../models/Psy.js");
const Hours = require("../models/Hours.js");




//RUTA PARA TRAER TODOS LOS HORARIOS CREADOS INDEPENDIENTEMENTE DEL PSY
router.get("/hours", async (req, res) => {
  const hours = await Hours.find({});
  res.send(hours);
});



//RUTA PARA CREAR UN HORARIO, SE VINCULA A UN PSY
router.post("/hours", async (req, res) => {
  const { day, hour, timeBreak, psyID } = req.body;
  const psyFind = await Psy.findById(psyID);
  const hours = new Hours({ day, hour, timeBreak, psy: psyFind._id });
  await hours.save();
  psyFind.hours = psyFind.hours.concat(hours._id);
  await psyFind.save();
  res.send(hours);
});

module.exports = router;
