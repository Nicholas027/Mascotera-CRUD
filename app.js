const express = require("express");
const bodyParser = require("body-parser")
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())




const port = process.env.PORT || 3000;

require('dotenv').config();

//Conexion a Bases de Datos
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@clusternicolas.yadxm.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Exito!: Conexion Establecida a MongoDB')) 
  .catch(e => console.log('Error de conexión con MongoDB:', e))



//motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));


//Rutas 
app.use("/", require("./router/rutasWeb"))
app.use("/Mascotas", require("./router/Mascotas"))



app.listen(port, ()=>{
    console.log("Servidor a su servicio desde el puerto", port)
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "ERROR 404 🚫",
        descripcion: "Sitio en Mantenimiento💔"
    })
})

