import express from "express"

import { googleAuth, logout } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/login", googleAuth)
router.get("/logout", logout)

export default router