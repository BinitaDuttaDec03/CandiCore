import express from "express"

import { googleAuth, logout, useCoins } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/login", googleAuth)
router.get("/logout", logout)
router.post("/use-coins", useCoins)

export default router