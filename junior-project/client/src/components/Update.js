import React, { useState, useEffect } from "react";
const UpdateProduct = ({ id, Cname, Cprice, CimageUrl, Cquantity, Update }) => {
    const [name, setName] = useState(Cname)
    const [price, setPrix] = useState(Cprice)
    const [imageUrl, setimg] = useState(CimageUrl)
    const [quantity, setQuantity] = useState(Cquantity)
    const [categoryId, setCategory] = useState(id)
    console.log("iddddd", categoryId)
    console.log("name hello from update", name)
    console.log("price", price)
    return (
        <div className="container">
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
            <div className="dropdown">
                <button className="dropdown-btn">Category</button>
                <div className="dropdown-content" >
                    <a href="#" onClick={() => setCategory(1)}>Accessory</a>
                    <a href="#" onClick={() => setCategory(4)}>Parfums</a>
                    <a href="#" onClick={() => setCategory(2)}>Dress</a>
                    <a href="#" onClick={() => setCategory(3)}>Shirts</a>
                </div>
            </div>
            <button className="btn-update btn-success btn-lg" onClick={() => { Update(id, { name, price, imageUrl, quantity, categoryId }) }}>Update Now</button>
        </div>
    )
}
export default UpdateProduct;