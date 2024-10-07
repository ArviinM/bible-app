import axios from "axios";

const API_URL = 'https://api.getbible.net/v2/tagalog'

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {'Content-Type': 'application/json'},
})
