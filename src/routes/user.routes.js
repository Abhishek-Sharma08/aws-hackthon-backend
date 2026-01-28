import express from "express"
import authMiddleware from "../middlewares/auth.middleware.js"

const router = express.Router()

router.get("/profile",authMiddleware, (req, res) => {
    res.json({
        message : "protected routes accessed",
        user : req.user
    })
})

export default router