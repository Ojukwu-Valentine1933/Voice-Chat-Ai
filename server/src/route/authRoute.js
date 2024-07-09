const express = require ("express")
const router = express.Router()


const googleAuth = require("../controller/user.controller")

router.post("/login", googleAuth)


module.exports = router