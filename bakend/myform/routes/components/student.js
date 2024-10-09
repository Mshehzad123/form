const mongoose = require('mongoose');
const studetSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const Stds =new  mongoose.model('Stds',studetSchema);

module.exports = Stds;