const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fundRaiserSchema= new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    name:{
        type:String,
        required: true,
    },
    scfname:{
        type:String,
        required: true,
    },
    habitat:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    status:{
        type:String,
        enum:['EX','EW','CR','EN','VU','NT','LC','DD','NE'],
    },
    image:{
        type:String,
       
    },
    meetingName:{
        type:String,
       
    },
    meetingId:{
        type:String,
       
    },
    bills:[{
        type: Schema.Types.ObjectId,
        ref:'billing'
    }]
})


module.exports= mongoose.model('Fundraiser', fundRaiserSchema);