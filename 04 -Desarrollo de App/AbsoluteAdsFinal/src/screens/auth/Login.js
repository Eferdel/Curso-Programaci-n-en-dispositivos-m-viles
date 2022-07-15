import React, { useState } from 'react';
import { View } from 'react-native';
import { useForm } from "react-hook-form";
import { Text, Button, Image } from '@rneui/base';
import EStyleSheet from "react-native-extended-stylesheet";
import Toast from "react-native-root-toast";
import { useAuth } from "../../providers/AuthProvider";
import { login } from "../../services/AuthService";

import { ErrorText, ActivityLoader } from "../../components/Shared";
import { EmailInput, PasswordInput } from "../../components/inputs";

const Login = ({ navigation }) => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [secureEntry, setSecureEntry] = useState(true)
    const {control, handleSubmit, formState: { errors }} = useForm()

    const { handleLogin } = useAuth()

    const _login = async (data) => {
        try {
            setLoading(true)
            const response = await login(data)
            await handleLogin(response.data)
            Toast.show('Bienvenid@', {
                position: Toast.positions.CENTER,
            })
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    const toggleSecureEntry = () => {
        setSecureEntry(!secureEntry)
    }

    return (
        <View style={styles.container}>
            {loading === true ? <ActivityLoader /> : null}

            <Image
                style={styles.icon}
                source={require('../../../assets/icon.png')}
            />

            <Text h2 style={styles.title}>Inicio de sesión</Text>

            <ErrorText error={error} />

            <EmailInput
                name="email"
                placeholder="Correo electrónico"
                control={control}
                errors={errors}
                inputStyle={styles.input}
                errorValidationStyle={styles.errorValidation}
            />

            <PasswordInput
                name="password"
                placeholder="Contraseña"
                control={control}
                errors={errors}
                errorValidationStyle={styles.errorValidation}
                inputStyle={styles.input}
                secureEntry={secureEntry}
                toggleSecureEntry={toggleSecureEntry}
            />

            <Button
                titleStyle={styles.buttonTitle}
                buttonStyle={styles.button}
                title="Acceder"
                onPress={handleSubmit(_login)}
            />

            <Text
                onPress={() => navigation.navigate("Signup")}
                style={styles.link}
            >¿Todavía no tienes una cuenta?</Text>
        </View>
    )
}

export default Login

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$authBg',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        color: '$primary',
        fontFamily: '$400Regular',
        fontWeight: '$fontWeight600',
        fontSize: '$font24',
    },
    buttonTitle: {
        fontFamily: '$400Regular',
        color: '$white',
        fontSize: 22,
    },
    button: {
        borderColor: 'transparent',
        backgroundColor: '$primary',
    },
    input: {
        fontFamily: '$400Regular',
        color: '$white',
    },
    link: {
        fontFamily: "$400Regular",
        fontSize: '$font16',
        color: '$white',
        textDecorationLine: "underline",
        marginTop: 20,
    },
    errorValidation: {
        color: "$red",
        fontSize: "$font12"
    }
})
