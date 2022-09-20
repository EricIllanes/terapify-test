const {Router}=require('express');
const router=Router();
const Client=require('../models/Client.js');
const Psy=require('../models/Psy.js');
const Hours=require('../models/Hours.js');
const Appointment=require('../models/Appointment.js');

router.get('/appointment', async (req, res)=>{
    try {
        const appointment=await Appointment.find({}).populate('psy').populate('client');
        res.send(appointment);
    } catch (error) {
        console.error(error);
    }
})

router.post('/appointment', async (req, res)=>{
    const {date, hour, psyID, clientID}=req.body;
    const psyFind=await Psy.findById(psyID);
    const clientFind = await Client.findById(clientID)
    const appointment= new Appointment({date, hour, psy:psyFind._id, client:clientFind._id})
    await appointment.save()
    clientFind.appointment= clientFind.appointment.concat(appointment._id)
    await clientFind.save()
    res.json(appointment)

})

module.exports = router;