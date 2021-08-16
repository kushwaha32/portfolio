
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phoneNo:{
        type: String,
        require: true
    },
    message:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Contact", contactSchema);