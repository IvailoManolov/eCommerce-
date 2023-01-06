const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name : {
        type : String,
        max:50,
        unique : true,
        required : true
    },

    shortDescription : {
        type : String,
        max : 85,  
        required : true
    },

    longDescription : {
        type : String,
        max : 185,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    image : {
        data : Buffer,
        contentType : String,
    },

    category : {
        type : Number,
        max : 3,
        min : 1 ,
        required : true
    }
})

module.exports = mongoose.model("Item",ItemSchema)