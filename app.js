const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index", {titulo : "mi titulo dinamico"})
})

app.get("/servicios", (req, res) => {
    res.render("servicios", {tituloServicios : "Estas en la pagina de servicios"})
})



app.listen(port, ()=>{
    console.log("Servidor a su servicio desde el puerto", port)
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Titulo del Sitio"
    })
})