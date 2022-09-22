const { Router } = require("express");
const router = Router();
const Client = require("../models/Client.js");
const Psy = require("../models/Psy.js");
const Hours = require("../models/Hours.js");

//RUTA PARA TRAER TODOS LOS HORARIOS CREADOS INDEPENDIENTEMENTE DEL PSY
router.get("/hours", async (req, res) => {
  try {
    const hours = await Hours.find({});
    res.status(200).json(hours);
  } catch (error) {
    console.log(error);
  }
});

//RUTA PARA CREAR UN HORARIO, SE VINCULA A UN PSY
router.post("/hours", async (req, res) => {
  try {
    const { day, workingPlan, timeBreak, psyID } = req.body;
    const psyFind = await Psy.findById(psyID);
    if (!psyFind) {
      res.send("Psy not found, try with another ID or create a new psy");
    } else {
      //CÓDIGO PARA TRANSFORMAR EL WORKINGPLAN A INTÉRVALOS DE HORAS
      //QUE SE GUARDARÁN EN DB
      //ej:  ["8:00-9:00", {available:true}] -----> este boolean se modificará para manejar horas disponibles
      let hoursInt = [workingPlan.start, workingPlan.end];
      let hoursIntBreak = [];
      let schedule = [];
      let start = parseInt(hoursInt[0].slice(0, 2));
      let end = parseInt(hoursInt[hoursInt.length - 1].slice(0, 2));
      let minInit = hoursInt[0].slice(3, 5);
      let minEnd = hoursInt[0].slice(3, 5);
      let n = start;
      while (n < end) {
        schedule.push({
          intHour: `${n.toString()}:${minInit}-${(n + 1).toString()}:${minEnd}`,
          available: true,
        });
        n++;
      }
      const hours = new Hours({
        day,
        schedule,
        workingPlan,
        timeBreak,
        psy: psyFind._id,
      });
      await hours.save();
      psyFind.hours = psyFind.hours.concat(hours._id);
      await psyFind.save();
      let schedulePsy = {
        psy: hours.psy,
        day: hours.day,
        schedule: hours.schedule,
      };

      // Accedemos al intervalo del timeBreak para setearlo en false,en caso de solicitarse
      // un appointment a esa hora, señalar que noe stá disponible
      timeBreak.forEach(async (e) => {
        await Hours.updateOne(
          {
            day: `${day}`,
            schedule: { $elemMatch: { intHour: e } },
          },
          {
            $set: { "schedule.$.available": false },
          }
        );
      });

      res.send(schedulePsy);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
