import {Controller} from "react-hook-form"
import {Icon, Input, Text} from "@rneui/base"

export default function PasswordInput ({
    name, placeholder, control, errors, inputStyle, errorValidationStyle, secureEntry, toggleSecureEntry
}) {
    return (
        <>
            <Controller
                control={control}
                rules={{
                    required: true,
                    minLength: 8,
                    maxLength: 30,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        style={inputStyle}
                        placeholder={placeholder}
                        placeholderTextColor='gray'
                        leftIcon={
                            <Icon name='key' type='ionicon' size={24} color='white' />
                        }
                        rightIcon={
                            <Icon
                                name='eye'
                                type='ionicon'
                                size={24}
                                color='white'
                                onPress={toggleSecureEntry}
                            />
                        }
                        secureTextEntry={secureEntry}
                    />
                )}
                name={name}
            />
            {errors[name]?.type === "required" &&
                <Text style={errorValidationStyle}>Campo requerido</Text>
            }
            {errors[name]?.type === "minLength" &&
                <Text style={errorValidationStyle}>Contraseña demasiado corta</Text>
            }
            {errors[name]?.type === "maxLength" &&
                <Text style={errorValidationStyle}>Contraseña demasiado larga</Text>
            }
        </>
    )
}
