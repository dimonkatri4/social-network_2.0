import axios from 'axios'

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'
const headersConfig = {
    'API-KEY': '100135da-520e-4d3e-bbd2-c947ccf46727',
}

export const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: headersConfig,
})
