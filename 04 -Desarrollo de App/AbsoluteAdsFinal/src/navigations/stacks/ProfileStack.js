import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../screens/user/Profile";
import ChangePassword from "../../screens/user/ChangePassword";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={Profile}
                name="Profile"
                options={{ title: 'Perfil' }}
            />
            <Stack.Screen
                component={ChangePassword}
                name="ChangePassword"
                options={{
                    title: "Cambiar contraseña",
                    headerBackTitle: "",
                }}
            />
        </Stack.Navigator>
    );
}
