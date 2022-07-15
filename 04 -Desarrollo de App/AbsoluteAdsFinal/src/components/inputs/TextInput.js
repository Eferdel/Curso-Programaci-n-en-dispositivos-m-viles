import {Controller} from "react-hook-form"
import {Icon, Input, Text} from "@rneui/base"

export default function TextInput({
    name, placeholder, required = true, minLength, maxLength, iconName, control,
    errors, inputStyle, errorValidationStyle,
}) {
    return (
        <>
            <Controller
                control={control}
                rules={{
                    required,
                    minLength,
                    maxLength,
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
                            <Icon name={iconName} type='ionicon' size={24} color='white'/>
                        }
                    />
                )}
                name={name}
            />
            {errors[name]?.type === "required" &&
                <Text style={errorValidationStyle}>Campo requerido</Text>
            }
            {errors[name]?.type === "minLength" &&
                <Text style={errorValidationStyle}>Longitud demasiado corta</Text>
            }
            {errors[name]?.type === "maxLength" &&
                <Text style={errorValidationStyle}>Longitud demasiado larga</Text>
            }
        </>
    )
}
