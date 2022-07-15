import axios from "../utils/axios"
import errorHandler from "../utils/axiosErrorHandler";

export async function fetchAds(page = 1) {
    try {
        let { data } = await axios.get(`ads?page=${page}`)
        return data.data
    } catch (e) {
        throw errorHandler(e)
    }
}

export async function fetchAd(id) {
    try {
        let { data } = await axios.get(`ads/${id}`)
        return data.data
    } catch (e) {
        throw errorHandler(e)
    }
}
