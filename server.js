const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const add = express();
const http = require('http').Server(app);

app.use(express.static('client/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let PORT = process.env.PORT || 8000;

http.listen(PORT, ()=>{
    console.log('this server is listening on PORT: ', PORT);
});
