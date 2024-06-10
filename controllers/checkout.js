import express from "express"
const router = express.Router()

router.get("/checkout", (req, res)=> {
    res.render('checkout/checkout')
})


export default router 