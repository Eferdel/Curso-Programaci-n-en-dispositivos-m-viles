//Dependencias que no son nuestras, no las hemos escrito nosotros

import React, { useEffect, useState } from 'react';
import { useFonts, Lato_100Thin, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { Asset } from "expo-asset"; // descargar de forma asíncrona assest cosas como el logo de la aplicación pra la pastallas de login y registro
import EStyleSheet from "react-native-extended-stylesheet"; //En vez de usar build, en theme/index.js aquí usaremos el método create, que nos dará acceso a todas las variables que hemos definido nostors antes
import * as SplashScreen from 'expo-splash-screen'; //Está dentro de node-modules, nos da acceso a todo lo que hayamso definido en splash screen
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";

//Dependencias que hemos realizado nosotros
require("./src/theme")

//En esta línea queremos prevenir que el splash se oculte de forma automática cuando este cargando de forma asíncrona
//En el bloque de JS, cuando trabnajamos con async y await, estas se resuelven automáticamente, 
// aquí hay que ejecutarlas. Se peuden ejecutar con cath o con then: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises
SplashScreen.preventAutoHideAsync().catch(() => {})



export default function App({ appName }) {

  /** ------------- CONTROL DE SPLASH SCREEN y FUENTES  -------------
   * Definimos appIsReady que nos va a decir si la aplicación está cargada o no
   * Usamos el hook useEffect para saber si la aplicación a terminado de cargar
   */

//Cargamos las fuentes
   let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_400Regular,
    Lato_700Bold,  //<- Es buena prácica dejar esto así, por git
})
  const [appIsReady, setAppIsReady] = useState(false)

  // Usamos el hook useEffect para determinar si la aplicación ha terminado de cargar
  // useEffect dice a React que tiene que hacer algo después de renderizarse
  // Definimos dentro de async (una función asincrona), una funcion síncrona, ya que JS no lo permite por definición
  // Para usar un await es necesario tener un async
  useEffect(() => {
      async function prepare () {
          try {
              await new Promise(resolve => setTimeout(resolve, 1000));
          } catch (e) {
              console.warn(e)
          } finally {
              setAppIsReady(true)
          }
      }
      prepare() //<- Llamamos a la función que acabamos de definir
  }, []) //<- Al final pasaríamos a useEffect las dependencias

//Si la aplicación está cargado, ocultamos de forma asincrona, tenemos que llamar a la función
  if (appIsReady&& fontsLoaded) {
      SplashScreen.hideAsync().then(() => {})
  }
//Si la aplicación no está cargada, no mostramos nada
  if (!appIsReady || !fontsLoaded) {
      return null
  }

  /** ------------- RETURN -------------
   */

  return (
    <View style={styles.container}>
      <Text style = {styles.text}> {appName} </Text>
    </View>
  );
}

/** ------------- CARGAR EL MANIFIESTO -------------
 * app.config.js
   */
App.defaultProps = {
  appName: Constants.manifest.name + '®' || "",
}

 /** ------------- RECURSOS EN CACHE -------------
  * _cacheResourcesAsync <- nombre por consenso
  * cargará archivos en la caché del dispositivo para que luego cargue de forma mas optima
  * Definimos un array de imagenes "images"
  
 */
const _cacheResourcesAsync = () => {
  const images = [
      require('./assets/icon.png'),
  ]

  const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync()
  })

  return Promise.all(cacheImages) //Array de promesas para que todos estén cacheados
}

 /** ------------- APLICANDO ESTILOS GLOBALES -------------
 */

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