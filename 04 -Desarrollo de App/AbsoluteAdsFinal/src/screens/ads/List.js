import React from 'react';
import { useState, useEffect, useRef } from "react";
import {SafeAreaView, FlatList, View} from 'react-native';
import { Card } from "@rneui/base";
import EStyleSheet from "react-native-extended-stylesheet";
import { fetchAds } from "../../services/AdsService";

const AdsList = ({ navigation }) => {
    const [ads, setAds] = useState()
    const page = useRef(1)

    useEffect(() => {
        (async () => {
            const _ads = await fetchAds()
            setAds(_ads.data)
        })()
    }, [])

    const loadMoreAds = async () => {
        page.current = page.current + 1
        setTimeout(async () => {
            const newAds = await fetchAds(page.current);
            setAds((a) => {
                return a.concat(newAds.data);
            });
        }, 500)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1}}>
                <Card>
                    <Card.Title>Tablón de anuncios</Card.Title>
                    <FlatList
                        data={ads}
                        renderItem={({ item: ad }) => {
                            return (
                                <View key={ad.id} style={styles.ad}>
                                    <Card.Divider />
                                    <Card.Title>{ad.title} - {ad.id}</Card.Title>
                                    <Card.Image
                                        onPress={() => {
                                            navigation.navigate('AdDetail', { id: ad.id })
                                        }}
                                        style={{padding: 0}}
                                        source={{uri: ad.image}}
                                    />
                                </View>
                            )
                        }}
                        contentContainerStyle={{
                            paddingBottom: 100
                        }}
                        onEndReached={loadMoreAds}
                    />
                </Card>
            </View>
        </SafeAreaView>
    );
};

export default AdsList;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$appBg',
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
