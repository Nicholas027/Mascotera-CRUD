const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {titulo : "Dynamic Title"})
})

router.get("/servicios", (req, res) => {
    res.render("servicios", {tituloServicios : "Contacto: Contenido Indefinido"})
})

module.exports = router;