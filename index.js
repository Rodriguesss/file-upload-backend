import express from "express"
import cors from "cors"
import path from "path"

import uploadRouter from "./src/routes/upload.routes.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')))
app.use(uploadRouter)

app.listen(5000, () => {
	console.log("Servidor ON")
})