const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// 连接数据库 
mongoose.connect('mongodb://localhost:27017/students',{useNewUrlParser: true});

const studentSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    gender:{
        type:Number,
        enum:[0,1],
        default:0
    },
    age:{
        type:Number
    },
    hobbies:{
        type:String
    }
});
module.exports = mongoose.model('students',studentSchema);