const { Router } = require("express");
const router = Router();
const Client = require("../models/Client.js");
const Psy = require("../models/Psy.js");
const Hours = require("../models/Hours.js");
const Appointment = require("../models/Appointment.js");

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
  let checkIfHourExist = await Hours.find({
    day: date,
    schedule: { $elemMatch: { intHour: hour } },
  });

  if(checkIfHourExist.length>=1){
    let checkHourAvailability = checkIfHourExist[0].schedule.find(
      (e) => e.intHour === hour
    );
    if (checkHourAvailability.available === false) {
      res.status(406).json({
        message:
          "La hora seleccionada no está disponible, por favor intenta con otra opción",
      });
    } else {
      const newAppointment = new Appointment({
        date,
        hour,
        psy: psyFind._id,
        client: clientFind._id,
      });
      await newAppointment.save();
      clientFind.appointment = clientFind.appointment.concat(newAppointment._id);
      await clientFind.save();

      // cambiamos el status de la hora solicitada  a false para que no se pueda reservar nuevamente
      await Hours.updateOne(
        {
          day: date,
          schedule:{$elemMatch: {intHour: hour}}
        },
        {
          $set :{ "schedule.$.available": false}
        }
      )
      res.status(200).json(newAppointment);
     }


  } else if (checkIfHourExist.length === 0) {
    res.status(404).json({
      message: "No hay horas disponibles en ese horario, por favor intenta con otra opción",
    });
  }
});

module.exports = router;