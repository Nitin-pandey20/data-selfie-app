const express = require('express');
const bodyParser = require('body-parser');

const Datastore = require('nedb');
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.listen(3000,()=> console.log('listening on port 3000'));
app.use(express.static('public'));
app.use(express.json());

const database=new Datastore('database.db');
database.loadDatabase();

app.get('/api',(request, response)=>{
    database.find({},(err,data)=>{
        if(err){
            response.end();
            return; 
        }

    response.json(data);
    });
});   
app.post('/api',(request, response)=>{
    console.log('I got a request');
    const data = request.body;
    const timestamp=Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
});  