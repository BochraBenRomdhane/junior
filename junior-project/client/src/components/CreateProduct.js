import React, { useState, useEffect } from "react";
const CreateProduct = ({ CreateItem }) => {
    const [name, setName] = useState("")
    const [price, setPrix] = useState("")
    const [imageUrl, setimg] = useState("")
    const [quantity, setQuantity] = useState("")
    return (
        <div className="container mt-4">
            <div className="form-group mb-3">
                <label htmlFor="productName">Product Name</label>
                <input
                    id="productName"
                    className="form-control"
                    placeholder="Enter product name"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="productImageUrl">Product Image URL</label>
                <input
                    id="productImageUrl"
                    className="form-control"
                    placeholder="Enter product image URL"
                    onChange={(e) => setimg(e.target.value)}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="productPrice">Product Price</label>
                <input
                    id="productPrice"
                    className="form-control"
                    placeholder="Enter product price"
                    onChange={(e) => setPrix(e.target.value)}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="productQuantity">Product Quantity</label>
                <input
                    id="productQuantity"
                    className="form-control"
                    placeholder="Enter product quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <button className="btn btn-success btn-lg" onClick={() => { CreateItem({ name, price, imageUrl, quantity }) }}>ADD IT</button>
        </div>
    )
}
export default CreateProduct;