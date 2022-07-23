const Product = require("../models/product.model.js");

module.exports = {
    createProduct: (req, res) => { 
        Product.create(req.body) 
            .then((newProduct) => res.json(newProduct)) 
            .catch((err) => console.log(err));
    },
    
    allProducts: (req, res) => {
        Product.find({}) 
            .then((allProducts) => res.json(allProducts))
            .catch((err) => console.log(err));
    },

    oneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => console.log(err));
    }

};