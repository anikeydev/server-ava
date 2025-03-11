import fs from 'fs'
import 'dotenv/config'

const apiKEY = process.env.MOS_BASE_API_KEY

const url = `https://apidata.mos.ru/v1/datasets/2985/features?api_key=${apiKEY}`

export async function fetchDataEnergyStations() {
    const response = await fetch(url)
    const data = await response.json()
    return data.features
}

