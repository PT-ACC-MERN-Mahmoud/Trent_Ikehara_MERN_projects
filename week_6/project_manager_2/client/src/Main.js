import React, { useState } from "react";
import NewProduct from "../components/Product";
import Display from "../components/DisplayAll";

const Main = (props) => {
    const [productList, setProductList] = useState([]);

    return (
        <div>
            <NewProduct
                productList={productList}
                setProductList={setProductList}
            />
            <Display
                productList={productList}
                setProductList={setProductList}
            />
        </div>
    );
};