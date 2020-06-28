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
        try {
            db.add (req.body);
            res.status(201).send('Restaurant agregado correctamente');
        } catch (err){
            console.log(err);
            res.status(400).send('El nombre del restaurant ya existe');
        }
    }
});

app.get('/api/list', (req, res) => {
    let list = db.list();
    res.status(200).send(list);
})

app.get('/api/:tag', (req, res) => {
    const kindOfRestaurant = req.params.tag; 
    const filteredRests = db.kindRest(kindOfRestaurant);
    res.status(200).send(filteredRests);

})



server.listen(3000, () => {
    console.log('escuchando en puerto 3000');
    
});