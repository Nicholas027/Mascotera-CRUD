const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {titulo : ""}) //Titulo dinamico entre comillas con EJS
    
})

// router.get("/servicios", (req, res) => {
//     res.render("servicios", {tituloServicios : "Contacto: Contenido Indefinido"})
// })

module.exports = router;