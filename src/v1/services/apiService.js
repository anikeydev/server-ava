import EnergyStationsBase from '../../database/EnergyStationsBase.js'

const apiService = {
    getEnergyStations: () => {
        return EnergyStationsBase.getAll()
    }
}

export default apiService