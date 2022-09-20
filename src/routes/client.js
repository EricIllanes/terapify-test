const {Router}=require('express');
const router=Router();
const Client=require('../models/Client.js')
const Psy =require('../models/Psy.js')
const Hours=require('../models/Hours.js')

//RUTA PARA TRAER TODOS LOS CLIENTES 
router.get('/client', async (req,res)=>{
let client=await Client.find({})
res.send(client)
    
})


//RUTA PARA CREAR UN CLIENTE
router.post('/client', async (req,res)=>{
    const {name, email}=req.body
    const client=new Client({name, email})
    await client.save()
    res.send(client)
    
})

module.exports=router;