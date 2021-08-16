
const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    discription: {
       type: String
    },
    img: {
       type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Portfolio", portfolioSchema);