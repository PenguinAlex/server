const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let data = require('./data/data.json')

app.get('/api', (req, res) =>{
   res.json(data)
    console.log('get req' )
})
app.post('/api', (req, res) => {
    data = req.body
    console.log('posted')
})
app.listen(3001, () =>{
    console.log('Server started on port 3001')
})