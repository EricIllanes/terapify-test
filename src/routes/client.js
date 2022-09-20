const {Router}=require('express');
const router=Router();
const Client=require('../models/Client.js')
const Psy =require('../models/Psy.js')
const Hours=require('../models/Hours.js')

//RUTA PARA TRAER TODOS LOS CLIENTES 
router.get('/client', async (req,res)=>{
let client=await Client.find({}).populate('appointment',{
    date:1,
    hour:1,
    psy:1,
})
res.send(client)
    
})


//RUTA PARA CREAR UN CLIENTE
router.post('/client', async (req,res)=>{
    const {name, email}=req.body
    const client=new Client({name, email})
    await client.save()
    res.send(client)
    
})


//RUTA PARA CREAR UNA CITA, PASANDO EL ID DEL CLIENTE Y DEL PSY
// router.post('/client/:id', async (req,res)=>{
// try {
//     const {id}=req.params
//     const {day, hour, psy}=req.body
//     const client=await Client.findById(id)
//     const psyClient= await Psy.findById(psy)
//     console.log(111, psyClient)
//     client.appointment.push({day, hour, psy})
//     await client.save()
//     res.send(client)
// } catch (error) {
//     console.log("el error es:", error)
// }   
// })

//RUTA PARA TRAER TODAS LAS CITAS DE UN CLIENTE
router.get('/client/:id', async (req,res)=>{
    const {id}=req.params
    const client=await Client.findById(id).populate('appointment.psy')
    res.send(client)  
})

module.exports=router;