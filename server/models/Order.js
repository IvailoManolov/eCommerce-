const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    products : {
        type : Object
    },

    userName : {
        type : String,
        required : true
    },

    stripeSessionID : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Order",OrderSchema)