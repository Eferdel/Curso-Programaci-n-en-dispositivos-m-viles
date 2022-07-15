import React, { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import Toast from "react-native-root-toast";
import { View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Icon } from "@rneui/base";
import EStyleSheet from "react-native-extended-stylesheet";

import { logout } from "../services/AuthService";
import { useAuth, USER_KEY } from "../providers/AuthProvider";

export default function DrawerContent(props) {
    const [user, setUser] = useState({})

    useEffect(() => {
        (async () => {
            const _user = await SecureStore.getItemAsync(USER_KEY)
            setUser(JSON.parse(_user))
        })()
    }, [])

    const { handleLogout } = useAuth()

    const _logout = async () => {
        try {
            await logout()
            await handleLogout()
            Toast.show("¡Hasta la próxima!")
        } catch (e) {
            Toast.show(e.message)
        }
    }

    return (
        <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfo}>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <Avatar
                                rounded
                                size="medium"
                                source={
                                    require("../../assets/avatar.png")
                                }
                            />

                            {user &&
                                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                                    <Text style={styles.title}>{user.name}</Text>
                                    <Text style={styles.subtitle}>{user.email}</Text>
                                </View>
                            }
                        </View>
                    </View>

                    <View style={styles.drawerItem}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home"
                                    color={color}
                                    size={size}
                                    type="ionicon"
                                />
                            )}
                            label="Inicio"
                            labelStyle={styles.label}
                            onPress={() => {
                                props.navigation.navigate("Ads");
                            }}
                        />
                    </View>

                    <View style={styles.drawerItem}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="person-outline"
                                    color={color}
                                    size={size}
                                    type="ionicon"
                                />
                            )}
                            label="Mi cuenta"
                            labelStyle={styles.label}
                            onPress={() => {
                                props.navigation.navigate("Account");
                            }}
                        />
                    </View>
                </View>
            </DrawerContentScrollView>

            <View style={styles.bottomDrawerItem}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-outline"
                            color={color}
                            size={size}
                            type="ionicon"
                        />
                    )}
                    label="Cerrar Sesión"
                    labelStyle={styles.label}
                    onPress={() => _logout()}
                />
            </View>
        </View>
    )
}

const styles = EStyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfo: {
        paddingLeft: 20,
    },
    title: {
        fontSize: '$font16',
        marginTop: 3,
        fontWeight: "bold",
        fontFamily: '$700Bold',
    },
    subtitle: {
        fontSize: '$font14',
        lineHeight: 14,
        fontFamily: '$400Regular',
    },
    drawerItem: {
        marginTop: 15,
    },
    label: {
        fontFamily: '$400Regular',
    },
    bottomDrawerItem: {
        marginBottom: 10,
        borderTopColor: "#ddd5d5",
        borderTopWidth: 1,
    },
});
