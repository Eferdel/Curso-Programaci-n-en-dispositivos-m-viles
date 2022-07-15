import { Platform } from "react-native"
import { deleteItemAsync, setItemAsync } from "expo-secure-store"
import axios from "../utils/axios"
import { USER_TOKEN_KEY, USER_KEY } from "../providers/AuthProvider"
import errorHandler from "../utils/axiosErrorHandler"

export async function login(data) {
    try {
        data.device_name = Platform.OS
        let res = await axios.post('login', data)
        await setItemAsync(USER_TOKEN_KEY, res.data.data.token)
        await setItemAsync(USER_KEY, JSON.stringify(res.data.data.user))
        return res.data
    } catch (e) {
        throw errorHandler(e)
    }
}

export async function signup(data) {
    try {
        let res = await axios.post('signup', data)
        return res.data.message
    } catch (e) {
        throw errorHandler(e)
    }
}

export async function logout() {
    try {
        let res = await axios.post('logout')
        await deleteItemAsync(USER_TOKEN_KEY)
        await deleteItemAsync(USER_KEY)
        return res.data
    } catch (e) {
        throw errorHandler(e)
    }
}
