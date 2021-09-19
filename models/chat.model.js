const mongoose = require('mongoose');

//create & Define schema
var chatSchema = new mongoose.Schema({
    username: { type: String },
    message: { type: String },
    sendDate : { type: Date, default: Date.now() },

});

// Export Model Externally
let  Chat  =  mongoose.model('Chat', chatSchema);
module.exports  =  Chat;