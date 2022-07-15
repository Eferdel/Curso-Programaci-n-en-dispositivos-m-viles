import { useState, useEffect } from 'react';
import {View} from "react-native";
import {Card} from "@rneui/base";
import EStyleSheet from "react-native-extended-stylesheet";
import {fetchAd} from "../../services/AdsService";
import {ActivityLoader} from "../../components/Shared";

export default function Detail ({ route: { params: { id } } } ) {
    const [ad, setAd] = useState()

    useEffect(() => {
        (async () => {
            setTimeout(async () => {
                const _ad = await fetchAd(id)
                setAd(_ad)
            },500)
        })()
    }, [])

    if (ad) {
        return (
            <View style={styles.ad}>
                <Card.Divider />
                <Card.Title>{ad.title} - {ad.id}</Card.Title>
                <Card.Image
                    style={{ padding: 0 }}
                    source={{uri: ad.image}}
                />
            </View>
        )
    }

    return <View style={styles.container}>
        <ActivityLoader />
    </View>
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$authBg',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
        color: '$white',
    },
    ad: {
        flexDirection: 'column',
        marginBottom: 20,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});
