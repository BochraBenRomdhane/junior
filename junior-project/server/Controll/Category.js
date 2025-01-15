const { Category } = require("../Models/index")
const { Product } = require("../Models/index")
module.exports = {
    CreateCategory: async (req, res) => {
        try {
            const { name } = req.body
            console.log(name)
            const category = await Category.create({
                name
            })
            res.status(200).send(category)
        } catch (err) {
            throw err
        }
    },
    getAll: async (req, res) => {
        try {
            const category = await Category.findAll({
                include: { model: Product },
            })
            res.status(200).send(category)
        } catch (err) {
            res.status(400).send({ message: "refused" })
            throw err
        }
    },
    OneCategory: async (req, res) => {
        try {
            await Category.findOne({ where: { id: req.params.id } })
                .then((resulta) => res.status(200).send(resulta))
        } catch (err) {
            res.status(400).send({ message: "Not found" })
            throw err
        }
    },
    deleteOne: async (req, res) => {
        try {
            await Category.destroy({
                where: { id: req.params.id }
            })
            res.status(200).send({ message: "deleted successfully !!!" })
        } catch (err) {
            res.status(400).send({ error: err })
            throw err
        }
    },
    updateOne: async (req, res) => {
        try {
            await Category.update(
                { name: req.body.name },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            res.status(200).send({ message: "updated!!!" })
        } catch (err) {
            res.status(400).send({ error: err })
            throw err
        }
    }
}