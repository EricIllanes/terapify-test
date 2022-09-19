const { Router } = require("express");
const router = Router();
const Client = require("../models/Client.js");
const Psy = require("../models/Psy.js");
const Hours = require("../models/Hours.js");



//RUTA PARA TRAER TODOS LOS PSY Y SUS HORARIOS
router.get("/psy", async (req, res) => {
  try {
    const psy = await Psy.find({}).populate("hours", {
      day: 1,
      hour: 1,
      timeBreak: 1,
      _id: 0,
    });

    res.send(psy);
  } catch (error) {
    console.error(error);
  }
});



//RUTA PARA CREAR UN PSY
router.post("/psy", async (req, res) => {
  try {
    const { name, email } = req.body;
    const psy = new Psy({ name, email });
    await psy.save();
    res.send(psy);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
