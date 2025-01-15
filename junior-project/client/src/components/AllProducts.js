import React, { useState, useEffect } from "react";
import OneProduct from "./OneProduct";
const AllProduct = ({ product, deleteItem, getvalues }) => {
    return (<div>
        <OneProduct products={product} deleteItem={deleteItem} getvalues={getvalues} />
    </div>);
}
export default AllProduct;
