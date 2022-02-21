import { Router } from "express"
import { MAX_PHOTOS, upload } from "../middlewares/multer.middleware.js"
import { uploadFiles, uploadFile } from "../controllers/upload.controller.js"

const uploadRouter = Router()

uploadRouter.post('/upload_files', upload.array("file"), uploadFiles)
uploadRouter.post('/upload_file', upload.single("file"), uploadFile)

export default uploadRouter