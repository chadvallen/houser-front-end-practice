const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const HC = require('./house_controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is running')
}).catch(err => {
    console.error('Error on massive', err)
})

app.get('/api/houses', HC.getHouses);
app.post('/api/house', HC.addHouse);
app.delete('/api/house/:id', HC.deleteHouse);

const PORT = 4300;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} 👻`)
})