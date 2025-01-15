import { set } from "mongoose";
import React, { useState } from "react";
import "../style.css"
const NavBar = ({ ChangeView, getBycategory, searching, fetch, product }) => {
    const [search, setSearch] = useState("")
    const handlesearch = (e) => {
        setSearch(e.target.value)
        searching(search)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top bg-body-tertiary">
            <a className="navbar-brand" href="#">Only Wemen</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" onClick={() => { ChangeView("home"), fetch(), setSearch("") }}>Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => { ChangeView("create"), setSearch("") }}>Create Product</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#" onClick={() => { ChangeView("update"), setSearch("") }}>
                            Update
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Category
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#" onClick={() => { getBycategory(2) }}>Dress</a>
                            <a className="dropdown-item" href="#" onClick={() => { getBycategory(3) }}>Shirts</a>
                            <a className="dropdown-item" href="#" onClick={() => { getBycategory(4) }}>Parfums</a>
                            <a className="dropdown-item" href="#" onClick={() => { getBycategory(1) }}>Accessory</a>
                        </div>
                    </li>
                </ul>
                <form className="form ">
                    <input className="form-control mr-sm-2" value={search} type="search" placeholder="Search..............................." onChange={(e) => handlesearch(e)} />
                </form>
            </div>
        </nav>)

}
export default NavBar;
export { }
