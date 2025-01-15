import React from "react";
import "../style.css"
const OneProduct = ({ products, deleteItem, getvalues }) => {
    console.log("product", products)
    return (
        <div className="d-flex flex-wrap gap-3 " style={{ justifyContent: 'center', alignItems: 'center', marginTop: "2.5em" }} >
            {products.map((product, i) => {
                return (
                    <div className="card " style={{ margin: '1em', width: '300px' }} key={i}>
                        <img
                            className="card-img-top img-fluid"
                            src={product.imageUrl}
                            alt="Card image cap"
                            style={{ maxHeight: '200px', objectFit: 'cover' }} // Control image size
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">price: {product.price}$</p>
                            <p className="card-text">quantity: {product.quantity}</p>
                            <div className="mt-auto">
                                <a href="#" className="btn btn-danger m-1" onClick={() => { deleteItem(product.id) }}>Delete</a>
                                <a href="#" className="btn btn-success" onClick={() => { getvalues(product.id) }}>Update</a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default OneProduct
