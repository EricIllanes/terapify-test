const { Router } = require("express");
const router = Router();
const Client = require("../models/Client.js");
const Psy = require("../models/Psy.js");
const Hours = require("../models/Hours.js");

//RUTA PARA CREAR UN PSY
router.post("/psy", async (req, res) => {
  try {
    const { name, email } = req.body;
    const psy = new Psy({ name, email });
    await psy.save();
    res.send(psy);
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

//RUTA PARA TRAER TODOS LOS PSY Y SUS HORARIOS
router.get("/psy", async (req, res) => {
  try {
    const psy = await Psy.find({}).populate("hours", {
      day: 1,
      workingPlan: 1,
      timeBreak: 1,
      _id: 0,
    });
    if (!psy) {
      res.status(404).send("No se encuentran Psy en la DB");
    }
    res.status(200).send(psy);
  } catch (error) {
    console.log(error);
  }
});
//RUTA PARA CONONCER HORAS DISPONIBLES DE UN PSY PASANDO SU ID
router.get("/psy/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let psyFind = await Psy.findById(id).populate("hours");
    if (!psyFind) {
      res.status(404).send("No se encuentra Psy asociado");
    } else {
      let infoPsy = {
        name: psyFind.name,
        email: psyFind.email,
        availableHours: psyFind.hours.map((e) => {
          return {
            day: e.day,
            hoursAvailable: e.schedule
              .filter((el) => el.available === true)
              .map((e) => e.intHour),
          };
        }),
      };
      res.send(infoPsy);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
