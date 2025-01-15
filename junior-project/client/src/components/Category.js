import React from "react";

const Category = ({ categorys }) => {
    // console.log("hi from category", categorys)
    return (
        <div className="d-flex flex-wrap gap-3 " style={{ marginLeft: '5em', marginRight: "5em", marginTop: "2.5em" }} >
            {categorys.map((category, i) => {
                return (
                    <div className="card " style={{ margin: '1em', width: '300px' }} key={i}>
                        <img
                            className="card-img-top img-fluid"
                            src={category.imageUrl}
                            alt="Card image cap"
                            style={{ maxHeight: '200px', objectFit: 'cover' }} // Control image size
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{category.name}</h5>
                            <p className="card-text">price: {category.price}$</p>
                            <p className="card-text">quantity: {category.quantity}</p>
                            <div className="mt-auto">
                                <a href="#" className="btn btn-danger m-1" onClick={() => { deleteItem(category.id) }}>Delete</a>
                                <a href="#" className="btn btn-success" onClick={() => { getvalues(category.id) }}>Update</a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default Category