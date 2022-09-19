const {Router}=require('express');
const router=Router();
const Client=require('../models/Client.js')
const Psy =require('../models/Psy.js')
const Hours=require('../models/Hours.js')


router.get('/client', async (req,res)=>{
res.send('hola de client')
    
})


module.exports=router;