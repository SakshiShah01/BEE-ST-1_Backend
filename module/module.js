const { default: mongoose } = require("mongoose");

const postSchema =  new mongoose.Schema(
    {
        bookname : {
            required : true,
            type : String
        },
        author : {
            required : true,
            type : String
        },
        content : {
            required : true,
            type : String
        }
    }
)

module.exports = mongoose.model('Post',postSchema);