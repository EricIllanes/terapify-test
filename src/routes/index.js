const { Router } = require("express");
const psyRouter = require("./Psy.js");
const clientRouter = require("./Client.js");
const hoursRouter = require("./Hours.js");

const router = Router();
router.use(psyRouter, clientRouter, hoursRouter);
module.exports = router;
