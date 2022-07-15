import {Controller} from "react-hook-form"
import {Icon, Input, Text} from "@rneui/base"

export default function EmailInput({
    name, placeholder, control, errors, inputStyle, errorValidationStyle,
}) {
    return (
        <>
            <Controller
                control={control}
                name={name}
                rules={{
                    required: true,
                    pattern: /^\S+@\S+$/i
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        style={inputStyle}
                        placeholder={placeholder}
                        placeholderTextColor='gray'
                        autoCapitalize='none'
                        leftIcon={
                            <Icon name='at' type='ionicon' size={24} color='white' />
                        }
                        keyboardType='email-address'
                    />
                )}
            />
            {errors.email?.type === "required" &&
                <Text style={errorValidationStyle}>Campo requerido</Text>
            }
            {errors.email?.type === "pattern" &&
                <Text style={errorValidationStyle}>El formato del correo no es válido</Text>
            }
        </>
    )
}
