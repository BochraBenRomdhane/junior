import React, { useState, useEffect } from "react";
import axios from "axios";
import AllProduct from "./components/AllProducts";
import CreateProduct from "./components/CreateProduct";
import NavBar from "./components/Navbar";
import UpdateProduct from "./components/Update";
import "./style.css"
const App = () => {
  const [view, setView] = useState("home")
  //my all product
  const [product, setproduct] = useState([])
  //to update product
  const [Cname, setCName] = useState("")
  const [Cprice, setCPrix] = useState("")
  const [CimageUrl, setCimg] = useState("")
  const [Cquantity, setCQuantity] = useState("")
  const [id, setId] = useState(0)
  const fetch = () => {
    axios.get("http://localhost:3000/product")
      .then((result) => {
        setproduct(result.data)
      })
      .catch((err) => {
        console.log("err", err)
      })
  }
  //delete item
  const deleteItem = (id) => {
    try {
      axios.delete(`http://localhost:3000/product/${id}`)
        .then(() => fetch())
    } catch (err) {
      console.log("err", err)
    }
  }
  //create a nex item
  const CreateItem = (body) => {
    try {
      axios.post(`http://localhost:3000/product/add`, body)
        .then(() => {
          fetch()
          setView("home")
        })
    } catch (err) {
      console.log("err", err)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  const changeCreate = (v) => {
    setView(v)
  }


  const getvalues = async (id) => {
    try {
      await axios.get(`http://localhost:3000/product/${id}`)
        .then((res) => {
          const product = res.data
          setCName(product.name)
          setCPrix(product.price)
          setCimg(product.imageUrl)
          setCQuantity(product.quantity)
          setId(product.id)
          setView("update")
        })
    } catch (err) {
      console.log("err", err)
    }
  }

  const Update = async (id, body) => {
    try {
      await axios.put(`http://localhost:3000/product/${id}`, body)
      console.log("updated")
      fetch()
      setView("home")
    } catch (err) {
      console.log("err", err)
    }
  }

  return (
    <div>
      <NavBar changeCreate={changeCreate} />
      <div>
        {view === "home" ? <AllProduct product={product} deleteItem={deleteItem} getvalues={getvalues} /> : view === "create" ? <CreateProduct CreateItem={CreateItem} /> : <UpdateProduct Cname={Cname} Cprice={Cprice} CimageUrl={CimageUrl} Cquantity={Cquantity} id={id} Update={Update} />}
      </div>
    </div>
  );
};

export default App;
