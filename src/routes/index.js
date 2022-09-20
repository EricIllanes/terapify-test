const { Router } = require("express");
const psyRouter = require("./Psy.js");
const clientRouter = require("./Client.js");
const hoursRouter = require("./Hours.js");
const appointmentRouter = require("./Appointment.js");
const router = Router();
router.use(psyRouter, clientRouter, hoursRouter, appointmentRouter);
module.exports = router;
