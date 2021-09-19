const mongoose = require ('mongoose');

const DBConn = mongoose.connect( 'mongodb://localhost:27017/ChatDB',
{useNewUrlParser: true }, (err)=>{
    if(!err){
        console.log('success');
    }else{
        console.log('fail');
    }
});

// Export Connection Externally
module.exports = DBConn;