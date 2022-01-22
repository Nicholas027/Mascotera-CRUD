const express = require('express');
const router = express.Router();
const Mascota = require('../models/mascota')

router.get('/', async(req, res) => {
    try {

        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)

        res.render("Mascotas", {
            arrayMascotas: arrayMascotasDB 
        })
        
    } catch (error) {
        console.log(error)
    }

    
})

router.get("/crear", (req, res)=>{
    res.render('crear')
})

router.post('/', async(req, res) =>{
    const body = req.body
    try {
        await Mascota.create(body)
        
        res.redirect('/Mascotas')

    } catch (error) {
        console.log(error)
    }
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        
        const mascotaDB = await Mascota.findOne({ _id: id })
        console.log(mascotaDB)

        res.render('detalle', {
            mascota : mascotaDB,
            error: false
        })

    } catch (error) {
        console.log(error)

        res.render('detalle', {
            error: true,
            mensaje: 'No encontrado con ese ID'
        })
    }
})

router.delete('/:id', async(req, res)=>{
    const id = req.params.id
    try {
        const mascotaDB = await Mascota.findByIdAndDelete({_id: id})

        if(mascotaDB){
                res.json({
                    estado: true,
                    mensaje: 'Eliminado con Exito!'
                })
        }else{
            res.json({
                estado: false,
                mensaje: 'Eliminado con Exito Falló!'
            })
        }
    } catch (error) {
        console.log(error)
    }
})


router.put('/:id', async(req, res)=>{
    const id = req.params.id
    const body = req.body
    try {
        
      const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false })
      console.log(mascotaDB)
      
      res.json({
          estado: true,
          mensaje: 'Editado con Exito!'
      })

    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Editado con Exito Falló!'
        })
    }
})

module.exports = router;