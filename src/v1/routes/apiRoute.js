import express from 'express'
import apiController from '../controllers/apiControler.js'

export const apiRouter = express.Router()

apiRouter.get('/', (req, res) => {
    res.send('This is api v1 server ava')
})

apiRouter.get('/help', (req, res) => {
    res.send('This is server for self using')
}) 

apiRouter.get('/energy-stations', apiController.getEnergyStations)