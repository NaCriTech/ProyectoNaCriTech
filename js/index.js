const { application, query } = require('express');
const express = require('express');
var cors = require('cors')
const app = express();


const connection = require('./controlador/db');

app.use(cors({origin: '*'}))
app.use(express.json());

app.get('/api', (req, res) => {

    connection.connect();
    connection.query('SELECT * from cliente ', function (error, results, fields) {
        if (error) throw error;

        res.send(results);

    });
    connection.end();

})

app.post('/api', cors() ,(req, res) => {
    var { nombreCliente, apellidoCliente, emailCliente } = req.body;

    console.log(req.body)
    connection.connect();
    var post = {  
        nombre : nombreCliente,
        apellido: apellidoCliente,
        email: emailCliente,
    }
    connection.query('INSERT INTO cliente set ? ', post, function(error, result, campos){
        if (error) throw error
        if ( result ) res.send({status:'ok' , message: 'Guardado con exito'});


    })

})


app.listen('3000', (error) => {
    if (error) console.log(error)
    console.log('El sevidor esta corriendo por el puero 3000')
})
