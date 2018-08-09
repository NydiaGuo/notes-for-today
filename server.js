const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const db = JSON.parse(fs.readFileSync('data/data.json', 'utf8'));

let app = express();
let http = require('http').Server(app);

app.use(express.static('client/'));
//app.use('/profile', express.static('edit-profile/')); when users go to URL/profile send them to "edit-profile"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let PORT = process.env.PORT || 8000;

http.listen(PORT, function(){
    console.log('this server is listening on PORT: '+ PORT );
});

// console.log(db.notes);

app.get('/get-data', (req, res)=>{
    let dataPackage = {
        "notes": db.notes
    } 
    console.log(dataPackage);
    res.send(dataPackage);
});