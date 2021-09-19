const express = require('express');
//link 
const Chat = require('../models/chat.model');
const DBConn = require('../mongodb');


// Define app Object
const app = express();
// Use express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET Chat Messages by Username
exports.getMessages = (req, res, next) => {
    try {
        console.log('username: ' + req.params.username);
        if (req.params.username) {
           Chat.find({username: req.params.username}, (err,chats)=>{
               console.log("Fetching the Data ... ");
               res.json(chats);
           })
        
     
        }
    } catch (error) {
        res.sendStatus(500);
        console.error(error);
}
};

//insert Chat Messsage 
exports.insertMessage = (req,res) => {
    var chat = new Chat();
    chat.username = req.body.username;
    chat.message = req.body.message;
    chat.sendDate = req.body.sendDate;
    chat.save((err, msg)=> {
        if(err)
        console.log('Error during record insertion :' + err);
    
        
    });
    
};