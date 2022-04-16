
var mongoose = require('mongoose');
const ProductSchema =  mongoose.Schema({
    productName : {type : String, required: true},
    productId : {type : String, required: true,},
    sales : {type : Number, required: true,},
    store : {type : String, required : true},
    description : {type : String, required : true}



});
module.exports = mongoose.model('Product',ProductSchema);

