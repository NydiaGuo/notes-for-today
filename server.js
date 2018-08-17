const express = require('express');
const bodyParser = require('body-parser');
// const fs = require('fs');
const mongoose = require('mongoose');
// const db = JSON.parse(fs.readFileSync('data/data.json', 'utf8'));


let dataURL = 'mongodb://firstdatabase:test2018@ds119692.mlab.com:19692/text2018';
//connect to mLab
mongoose.connect(dataURL, function(err){
    if (err){
        console.log("errs");
    } else {
        console.log("no errs and connected to your mongodb database");
    }
    
});


let Note = mongoose.Schema({
    "text":String
});

let TheNote = mongoose.model('Notes', Note);


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




//getting data from database which is the JSON object
app.get('/get-data', (req,res)=>{
 
    TheNote.find({}).then(function(data){
        res.send(data);
        console.log("this is the data array: ", data);
    });

});


app.post('/set-data', (req, res)=>{

    let newNote = new TheNote({
        "text": req.body.task
    });
    
    newNote.save(function(err, result){
        if(err){
            console.log("saving errs: ",err);
            return;
        } else {
            console.log("this is result: ", result);
        }
    
    
    });

});


app.post('drop-data',(req, res)=>{

    let taskID = req.body._id;

    TheNote.findByIdAndRemove(taskID, function(err, result){
        if (err) {
            console.log(err);
        } else {
            // let index = -1;
            console.log("this is the drop-data: ", result);
            // for (let i=0; i<result.length; i++){
                // if (result[i]._id.$oid == taskID) {
                //     index = i;
                //     break;
                // }
            // }
        }
        // if(index)

    });


});
