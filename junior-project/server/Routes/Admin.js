const express = require("express")
const Router = express.Router()
const { CreateAdmin, getAll, getOneAdmin, deleteOne, updateOne } = require("../Controll/Admin")

Router.post("/add", CreateAdmin)
Router.get("/:id", getOneAdmin)
Router.get("/", getAll)
Router.put("/:id", updateOne)
Router.delete("/:id", deleteOne)

module.exports = Router