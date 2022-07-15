import { ActivityIndicator, Text, View } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet";

export const ErrorText = ({ error }) => {
    return <Text style={styles.errorText}>{error}</Text>
}

ErrorText.defaultProps = {
    error: ""
}

export const ActivityLoader = () => {
    return (
        <View style={styles.activityLoader}>
            <ActivityIndicator
                color='#f29866' size={"large"}
            />
        </View>
    )
}

const styles = EStyleSheet.create({
    errorText: {
        marginBottom: 8,
        color: '$red',
        fontFamily: '$400Regular',
        fontSize: '$font14',
    },
    activityLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    }
})
