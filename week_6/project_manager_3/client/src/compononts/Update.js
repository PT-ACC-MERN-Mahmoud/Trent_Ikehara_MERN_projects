import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const [headerName, setHeaderName] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setHeaderName(res.data.name);
            })
            .catch((err) => console.log(err));
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`, {
                name, 
                price,
                description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/"); 
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <header>Edit {headerName}</header>

            <form onSubmit={submitHandler}>
                <div className="form-fields">
                    <label>Title</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        name="name"
                        type="text"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Description</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>

                <br />
                <input class="submit-input" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;