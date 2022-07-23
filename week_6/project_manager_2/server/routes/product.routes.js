const ProductController = require("../controllers/product.controller");

module.exports = (app)=>{
    app.post("/api/products", ProductController.createProduct);
    app.post("/api/products", ProductController.allProducts);
    app.get("/api/products/:id", ProductController.oneProduct);
}