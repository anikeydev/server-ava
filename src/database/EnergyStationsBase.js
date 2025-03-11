import { fetchDataEnergyStations } from './ApiMSK.js'

const data = await fetchDataEnergyStations()

const EnergyStationsBase = {
    getAll: () => {
        const result = []
        data.forEach(item => {
            result.push({
                name: item.properties.attributes.Name,
                address: item.properties.attributes.Address,
                coordinates: item.geometry.coordinates
            })   
        })
        return result
    }
}

export default EnergyStationsBase