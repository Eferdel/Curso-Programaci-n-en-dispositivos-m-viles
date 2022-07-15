import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from '@rneui/base'
import EStyleSheet from "react-native-extended-stylesheet";
import Constants from 'expo-constants';
import AdsStack from "./stacks/AdsStack";
import ProfileStack from "./stacks/ProfileStack";
import DrawerContent from "../components/DrawerContent"

const BottomTabs = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const TabBar = ({ appName }) => {
    return (
        <BottomTabs.Navigator
            initialRouteName="Ads"
            screenOptions={({route, navigation}) => ({
                tabBarIcon: ({focused}) => showIcon(route, focused),
                tabBarStyle: {
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    alignItems: "center",
                    backgroundColor: styles.tabStyles.backgroundColor,
                    paddingTop: 5,
                    position: 'absolute',
                    overflow:'hidden',
                },
                headerRight: () => menuIcon(navigation)
            })}
        >
            <BottomTabs.Screen
                name="Ads"
                component={AdsStack}
                options={{
                    headerTitle: appName,
                    title: "",
                    headerTitleAlign: "center",
                    headerStyle: styles.headerStyle,
                    headerTintColor: styles.header.color,
                    headerTitleStyle: {
                        fontFamily: styles.header.fontFamily,
                        fontWeight: styles.header.fontWeight,
                        fontSize: 22,
                    }
                }}
            />

            <BottomTabs.Screen
                name="Account"
                component={ProfileStack}
                options={{
                    headerTitle: appName,
                    title: "",
                    headerTitleAlign: "center",
                    headerStyle: styles.headerStyle,
                    headerTintColor: styles.header.color,
                    headerTitleStyle: {
                        fontFamily: styles.header.fontFamily,
                        fontWeight: styles.header.fontWeight,
                        fontSize: 22,
                    }
                }}
            />
        </BottomTabs.Navigator>
    )
}

TabBar.defaultProps = {
    appName: Constants.manifest.name + '®' || "",
}

export default function AdsNavigation () {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                headerShown: false
            }}
        >
            <Drawer.Screen
                name="BottomTabs"
                component={TabBar}
            />
        </Drawer.Navigator>
    )
}

const showIcon = (route, focused) => {
    let icon = ""
    switch (route.name) {
        case "Ads": {
            icon = "home"
            break;
        }
        case "Account": {
            icon = "person-outline"
            break;
        }
    }

    return <Icon name={icon} type='ionicon' color={focused ? "orange" : "black"} style={{marginTop: 2}} />
}

const menuIcon = (navigation) => {
    return <Icon
        name="menu"
        type="ionicon"
        size={30}
        color="white"
        style={{ marginTop: 2, marginRight: 10 }}
        onPress={() => navigation.toggleDrawer()}
    />
}

const styles = EStyleSheet.create({
    tabStyles: {
        backgroundColor: '$white',
    },
    headerStyle: {
        backgroundColor: "$primary",
        shadowColor: "$primary",
    },
    header: {
        color: "$white",
        fontFamily: '$700Bold',
    }
});
