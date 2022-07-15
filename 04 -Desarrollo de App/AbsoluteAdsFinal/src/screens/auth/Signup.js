import React, { useState } from 'react';
import { View } from 'react-native';
import { useForm } from "react-hook-form";
import { Text, Button, Image } from '@rneui/base';
import Toast from "react-native-root-toast";
import EStyleSheet from "react-native-extended-stylesheet";
import { signup} from "../../services/AuthService";

import { ErrorText, ActivityLoader } from "../../components/Shared";
import { EmailInput, PasswordInput, TextInput } from "../../components/inputs";

const Signup = ({ navigation }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [secureEntry, setSecureEntry] = useState(true);
    const [secureConfirmationEntry, setSecureConfirmationEntry] = useState(true);
    const { control, handleSubmit, formState: { errors } } = useForm();

    const _signup = async (data) => {
        try {
            setLoading(true)
            const message = await signup(data)
            await navigation.navigate("Login")
            Toast.show(message, {})
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    const toggleSecureEntry = () => {
        setSecureEntry(!secureEntry)
    }

    const toggleSecureConfirmationEntry = () => {
        setSecureConfirmationEntry(!secureConfirmationEntry)
    }

    return (
        <View style={styles.container}>
            {loading === true ? <ActivityLoader/> : null}

            <Image
                style={styles.icon}
                source={require('../../../assets/icon.png')}
            />

            <Text h2 style={styles.title}>Registro</Text>

            <ErrorText error={error}/>

            <TextInput
                name="name"
                placeholder="Tu nombre"
                minLength={2}
                maxLength={20}
                iconName="person-outline"
                control={control}
                errors={errors}
                errorValidationStyle={styles.errorValidation}
                inputStyle={styles.input}
            />

            <EmailInput
                name="email"
                placeholder="Correo electrónico"
                control={control}
                errors={errors}
                errorValidationStyle={styles.errorValidation}
                inputStyle={styles.input}
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

            <PasswordInput
                name="passwordConfirmation"
                placeholder="Confirma tu contraseña"
                control={control}
                errors={errors}
                errorValidationStyle={styles.errorValidation}
                inputStyle={styles.input}
                secureEntry={secureConfirmationEntry}
                toggleSecureEntry={toggleSecureConfirmationEntry}
            />

            <Button
                titleStyle={styles.buttonTitle}
                buttonStyle={styles.button}
                title="Crear cuenta"
                onPress={handleSubmit(_signup)}
            />

            <Text
                onPress={() => navigation.navigate("Login")}
                style={styles.link}
            >
                ¿Ya tienes una cuenta?
            </Text>
        </View>
    )
}

export default Signup

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
