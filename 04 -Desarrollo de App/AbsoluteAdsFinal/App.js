import React, { useEffect, useState } from 'react';

import { useFonts, Lato_100Thin, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { Asset } from "expo-asset";
import EStyleSheet from "react-native-extended-stylesheet";
import * as SplashScreen from 'expo-splash-screen';
import Constants from "expo-constants";
import {RootSiblingParent } from "react-native-root-siblings"
import {AuthProvider} from "./src/providers/AuthProvider";
import {LogBox} from "react-native";

require("./src/theme")

LogBox.ignoreLogs(['Require cycle:']);

SplashScreen.preventAutoHideAsync().catch(() => {})

export default function App({ appName }) {
    let [fontsLoaded] = useFonts({
        Lato_100Thin,
        Lato_400Regular,
        Lato_700Bold,
    })

    const [appIsReady, setAppIsReady] = useState(false)

    useEffect(() => {
        async function prepare () {
            try {
                await _cacheResourcesAsync()
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e)
            } finally {
                setAppIsReady(true)
            }
        }

        prepare()
    }, [])


    if (appIsReady && fontsLoaded) {
        SplashScreen.hideAsync().then(() => {})
    }

    if (!appIsReady || !fontsLoaded) {
        return null
    }

    return (
        <RootSiblingParent>
            <AuthProvider />
        </RootSiblingParent>
    )
}

App.defaultProps = {
  appName: Constants.manifest.name + '®' || "",
}

const _cacheResourcesAsync = () => {
    const images = [
        require('./assets/icon.png'),
    ]

    const cacheImages = images.map(image => {
        return Asset.fromModule(image).downloadAsync()
    })

    return Promise.all(cacheImages)
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$primary',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
    },
    text: {
        fontSize: '$font32',
        fontFamily: '$700Bold',
        color: '$white',
    }
})
