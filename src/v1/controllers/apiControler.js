import apiService from '../services/apiService.js'

const apiController = {
    getEnergyStations: (req, res) => {
        res.send({
            status: 'OK',
            data: apiService.getEnergyStations()
        })
    }
}

export default apiController