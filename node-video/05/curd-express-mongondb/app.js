const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');

app.engine('html', require('express-art-template'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/node_modules/',express.static('../node_modules'));
app.use('/public/',express.static('./public'));

app.use(router);
app.listen(3000,()=>{
  console.log(`Example app listening at http://127.0.0.1:3000`);
})