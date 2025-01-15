import React, { useState, useEffect } from "react";
import axios from "axios";
import AllProduct from "./components/AllProducts";
import CreateProduct from "./components/CreateProduct";
import NavBar from "./components/Navbar";
import UpdateProduct from "./components/Update";
import Footer from "./components/Footer";
import Category from "./components/Category";
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
  // Category states:
  const [categorys, setCategory] = useState([])
  //kind of category:
  const [caty, setCaty] = useState([])

  const getAllCatrgory = () => {
    axios.get("http://localhost:3000/category")
      .then((result) => {
        setCaty(result.data)
      })
      .catch((err) => {
        console.log("err", err)
      })
  }

  //fetch data

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
    getAllCatrgory()
  }, [])

  const ChangeView = (v) => {
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
  //function to search category
  const getBycategory = (id) => {
    try {
      axios.get(`http://localhost:3000/product/cat/${id}`)
        .then((res) => { setCategory(res.data), setView("category") })
    } catch (err) {
      console.log("err", err)
    }
  }
  //searching function
  const searching = (search) => {
    if (search.length - 1 === 0) {
      fetch()
    } else {
      const lowersearch = search.toLowerCase()
      const result = product.filter((e, i) => {
        const lowerE = e.name.toLowerCase()
        return lowerE.includes(lowersearch)
      })
      setproduct(result)
    }
  }
  return (
    <div>
      <NavBar ChangeView={ChangeView} getBycategory={getBycategory} searching={searching} fetch={fetch} />
      <div>
        {view === "home" ? <AllProduct product={product} deleteItem={deleteItem} getvalues={getvalues} /> : view === "create" ? <CreateProduct CreateItem={CreateItem} Category={caty} /> : view === "update" ? <UpdateProduct Cname={Cname} Cprice={Cprice} CimageUrl={CimageUrl} Cquantity={Cquantity} id={id} Update={Update} /> : <Category categorys={categorys} />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
