var{model, Schema} = require("mongoose")

var PostSchema = Schema({

    title: String,
    author: String,
    post_date: {
        type: Date,
        default: Date.now
    },
    post_data: String
    
})

module.exports = model('posts', PostSchema)