import express from "express"

import upload from "../middlewares/multer.middleware.js"
import { getResume, uploadResume } from "../controllers/resume.controller.js"

const router = express.Router()

router.post("/upload", upload.single("resume"), uploadResume)
router.get("/get-resume", getResume)

export default router