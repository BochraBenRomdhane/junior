import React, { useState, useEffect } from "react";
import "../style.css"
const CreateProduct = ({ CreateItem }) => {
    const [name, setName] = useState("")
    const [price, setPrix] = useState("")
    const [imageUrl, setimg] = useState("")
    const [quantity, setQuantity] = useState("")
    const [categoryId, setCategory] = useState(0)
    return (
        <div className="container">
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
            <div className="dropdown">
                <button className="dropdown-btn">Category</button>
                <div className="dropdown-content">
                    <a href="#" onClick={() => setCategory(1)}>Accessory</a>
                    <a href="#" onClick={() => setCategory(4)}>Parfums</a>
                    <a href="#" onClick={() => setCategory(2)}>Dress</a>
                    <a href="#" onClick={() => setCategory(3)}>Shirts</a>
                </div>
            </div>
            <button className="btn-add btn-success btn-lg" onClick={() => { CreateItem({ name, price, imageUrl, quantity, categoryId }) }}>ADD IT</button>
        </div>
    )
}
export default CreateProduct;