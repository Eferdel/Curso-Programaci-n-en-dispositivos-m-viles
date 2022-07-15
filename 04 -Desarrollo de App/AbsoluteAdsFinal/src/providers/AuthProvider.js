import React, { createContext, useEffect, useReducer, useMemo, useContext } from "react"
import * as axios from "axios"
import { getItemAsync } from "expo-secure-store"
import authReducer, { initialState, RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from "../reducers/AuthReducer"
import AppNavigation from "../navigations/AppNavigation";

export const AuthContext = createContext()

export const USER_TOKEN_KEY = 'userToken';
export const USER_KEY = 'user';

const AuthProvider = () => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken = null;

            try {
                userToken = await getItemAsync(USER_TOKEN_KEY)
            } catch (e) {
                alert("El token no se ha podido obtener")
            }

            dispatch({
                type: RESTORE_TOKEN,
                token: userToken,
            })
        }

        bootstrapAsync().then(() => {})
    }, [])

    const handleLogin = async ({ token, user }) => {
        try {
            dispatch({ type: SIGN_IN, token, user })
        } catch (e) {
            throw new Error(e)
        }
    }

    const handleLogout = async () => {
        try {
            delete axios.defaults.headers.common['Authorization']
            dispatch({ type: SIGN_OUT })
        } catch (e) {
            dispatch({ type: SIGN_OUT })
            throw new Error(e)
        }
    }

    const authContext = useMemo(() => {
        return { state, handleLogout, handleLogin, }
    }, [state])

    return (
        <AuthContext.Provider value={authContext}>
            <AppNavigation userToken={state.userToken} />
        </AuthContext.Provider>
    )
}

/**
 * Object {
 * "handleLogin": [Function handleLogin],
 *  "handleLogout": [Function handleLogout],
 *  "state": Object {
 *    "user": null,
 *    "userToken": null,
 *  },
 * }
 */
const useAuth = () => useContext(AuthContext)
export { useAuth, AuthProvider }
