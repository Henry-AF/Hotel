import express from "express"
const router = express.Router()

router.get("/cadastro", (req, res)=> {
    res.render('cadastro/cadastro')
})


export default router 