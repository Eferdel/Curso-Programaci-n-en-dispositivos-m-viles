import { createNativeStackNavigator } from "@react-navigation/native-stack"
import EStyleSheet from "react-native-extended-stylesheet";
import Constants from "expo-constants";

import Login from "../../screens/auth/Login";
import Signup from "../../screens/auth/Signup";

const Stack = createNativeStackNavigator()

const AuthStack = ({ appName }) => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerBackTitle: "",
                headerShown: true,
                headerTitle: appName,
                headerStyle: styles.headerStyle,
                headerShadowVisible: false,
                headerTintColor: styles.header.color,
                headerTitleStyle: {
                    fontFamily: styles.header.fontFamily,
                    fontWeight: styles.header.fontWeight,
                    fontSize: 22,
                }
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}

AuthStack.defaultProps = {
    appName: Constants.manifest.name,
}

export default AuthStack

const styles = EStyleSheet.create({
    headerStyle: {
        backgroundColor: "$authBg",
    },
    header: {
        fontSize: '$font28',
        color: "$primary",
        fontFamily: '$700Bold',
    }
})
