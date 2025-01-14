const express = require("express")
const Router = express.Router()
const { CreateProduct, getAll, OneProduct, deleteOne, updateOne } = require("../Controll/Product")

Router.post("/add", CreateProduct)
Router.get("/:id", OneProduct)
Router.get("/", getAll)
Router.put("/:id", updateOne)
Router.delete("/:id", deleteOne)

module.exports = Router