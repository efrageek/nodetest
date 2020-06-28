const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
//database
const db = require('./store');

//cors
app.use(cors());

app.use(bodyParser.json());

app.post('/api/add', (req, res) => {
    

    if(!req.body) {
        res.status(501).send('error interno')
        console.log(req.body)
    }



    if (req.body) {
        const restAdded = db.add (req.body);
        if (restAdded) {
            res.status(201).send('Restaurant agregado correctamente');
        }else {
            console.log('error');
            res.status(401).send('El nombre del restaurant ya existe');
        }

    }
});

app.get('/api/list', (req, res) => {
    let list = db.list();
    res.status(200).send(list);
})

server.listen(3000, () => {
    console.log('escuchando en puerto 3000');

});