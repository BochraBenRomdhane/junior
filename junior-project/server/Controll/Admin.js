const { Admin } = require("../Models/index")
module.exports = {
    CreateAdmin: async (req, res) => {
        try {
            const { name, email, password } = req.body
            console.log(name)
            const admin = await Admin.create({
                name, email, password
            })
            res.status(200).send({ message: "created successfully", admin })
        } catch (err) {
            throw err
        }
    },
    getAll: async (req, res) => {
        try {
            const admin = await Admin.findAll()
            res.status(200).send({ message: "created successfelly", admin })
        } catch (err) {
            res.status(400).send({ message: "refused" })
            throw err
        }
    },
    getOneAdmin: async (req, res) => {
        try {
            const admin = await Admin.findByPk(req.params.id)
            res.status(200).send(admin)
        } catch (err) {
            res.status(400).send({ message: "Not found" })
            throw err
        }
    },
    deleteOne: async (req, res) => {
        try {
            await Admin.destroy({
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
            const { name, email, password } = req.body
            await Admin.update(
                { name, email, password },
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