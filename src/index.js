import express from 'express'
import 'dotenv/config'
import { apiRouter } from './v1/routes/apiRoute.js'

const app = express()

const PORT = process.env.PORT

app.use('/api/v1', apiRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})