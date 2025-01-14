import React, { useState, useEffect } from "react";
const UpdateProduct = ({ id, Cname, Cprice, CimageUrl, Cquantity, Update }) => {
    const [name, setName] = useState(Cname)
    const [price, setPrix] = useState(Cprice)
    const [imageUrl, setimg] = useState(CimageUrl)
    const [quantity, setQuantity] = useState(Cquantity)
    console.log("name", name)
    console.log("price", price)
    return (
        <div className="container mt-4">
            <div className="form-group mb-3">
                <label htmlFor="productName">Product Name</label>
                <input
                    value={name}
                    id="productName"
                    className="form-control"
                    placeholder="Enter product name"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="productImageUrl">Product Image URL</label>
                <input
                    value={imageUrl}
                    id="productImageUrl"
                    className="form-control"
                    placeholder="Enter product image URL"
                    onChange={(e) => setimg(e.target.value)}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="productPrice">Product Price</label>
                <input
                    value={price}
                    id="productPrice"
                    className="form-control"
                    placeholder="Enter product price"
                    onChange={(e) => setPrix(e.target.value)}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="productQuantity">Product Quantity</label>
                <input
                    value={quantity}
                    id="productQuantity"
                    className="form-control"
                    placeholder="Enter product quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <button className="btn btn-success btn-lg" onClick={() => { Update(id, { name, price, imageUrl, quantity }) }}>Update Now</button>
        </div>
    )
}
export default UpdateProduct;