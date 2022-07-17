const express = require("express"); 
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use(cors({ 
    origin:"http://localhost:3000" 
}));

require("./config/mongoose.config"); 


require("./routes/product.routes")(app);

app.listen(8000, () => console.log("Listening on Port 8000"))