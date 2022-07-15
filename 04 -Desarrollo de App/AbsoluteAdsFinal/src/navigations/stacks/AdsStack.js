import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdsList from "../../screens/ads/List";
import AdDetail from "../../screens/ads/Detail";

const Stack = createNativeStackNavigator();

export default function AdsStack() {
    return (
        <Stack.Navigator
            initialRouteName="AdsStack"
            screenOptions={{
                headerBackTitle: "",
                headerShown: true,
                headerTitle: "Anuncios",
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen
                component={AdsList}
                name="AdsStack"
                options={{ title: 'Anuncios' }}
            />

            <Stack.Screen
                component={AdDetail}
                name="AdDetail"
                options={{ title: 'Detalle anuncio' }}
            />
        </Stack.Navigator>
    );
}
