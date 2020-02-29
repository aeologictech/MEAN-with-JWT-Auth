const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  app = express(),
  database = require('./db')
  route = require('../backend/routes/route');

mongoose.connect(database.db, {useUnifiedTopology: true, useNewUrlParser: true}).then(response => {
  console.log('Database connected sucessfully ')
}).catch(error => {
  console.log(error);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/', route);

const port = process.env.PORT || 3000;
const connect = app.listen(port, () => {
  console.log(`server is up and running on port: ${port}`);
})
