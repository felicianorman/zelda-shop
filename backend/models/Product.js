const { default: mongoose, mongo } = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: String,
    rupees: Number,
    amount: {
        type: Number,
        default: 1
    },
    category: String
})

module.exports = mongoose.model('Product', productSchema)