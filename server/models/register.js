const {mongoose}=require("../db");

const registerSchema=mongoose.Schema({
    name: {type: String, require},
    email: {type: String, require},
    mobile: {type: String, require},
    dob: {type: String, require},
    gender: {type: String, require},
    address: {type: String, require},
    password: {type: String, require},
}, {timestamps: true, })

module.exports=mongoose.model('registration', registerSchema)