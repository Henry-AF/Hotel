import express from "express"
const router = express.Router()

router.get("/admin", (req, res)=> {
    res.render('administrativo/admin')
})


export default router 