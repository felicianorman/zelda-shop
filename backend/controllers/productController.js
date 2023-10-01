const Product = require("../models/Product")

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()

        if(!products) throw new Error('Not found')
        return res.send(products)
    }
    catch(error) {
        console.log(error)
    }
}

exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.productId;

        const product = await Product.findById(productId);
        if(!product) throw new Error('Not found');

        res.json(product)

    }
    catch (error) {
        console.log
    }
}
