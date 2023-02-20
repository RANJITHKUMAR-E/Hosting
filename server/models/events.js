const {mongoose}=require("../db");

const eventsSchema=mongoose.Schema({
    name: {type: String, require},
    desc: {type: String, require},
    image: {type: String, require},
    // location: {type: String, require},
    date: {type: String, require},
}, {timestamps: true, })

module.exports=mongoose.model('events', eventsSchema)