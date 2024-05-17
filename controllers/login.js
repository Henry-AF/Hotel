import express from "express"
const router = express.Router()

router.get("/login", (req, res)=> {
    res.render('login/login')
})


export default router 