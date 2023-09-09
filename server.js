const express        = require('express');
const { MongoClient } = require('mongodb')
const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

const client = new MongoClient(db.url)

// Connect to database
client.connect()
    .then(() => console.log('Connected Successfully'))
    .catch(error => console.log('Failed to connect', error));
const database = client.db("note-api");
console.log("Connected to MongoDB");
  
require('./app/routes')(app, database);

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
