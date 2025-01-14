const express = require("express")
const Router = express.Router()
const { CreateCategory, getAll, OneCategory, deleteOne, updateOne } = require("../Controll/Category")

Router.post("/add", CreateCategory)
Router.get("/:id", OneCategory)
Router.get("/", getAll)
Router.put("/:id", updateOne)
Router.delete("/:id", deleteOne)

module.exports = Router