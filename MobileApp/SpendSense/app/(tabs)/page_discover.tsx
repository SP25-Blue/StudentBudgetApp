import React from 'react';
import {
    Text,
    View,
    Pressable,
    ImageBackground,
    Linking,
    FlatList
} from 'react-native';
import { buttonStyles, imageStyles, textStyles, viewStyles } from '../../constants/Styles';
import { useAds } from '../contexts/context';
import { Image } from 'react-native';
import { Advertising } from '../../core/ads/Advertising';
import { Link, router } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

type ItemProps = { ad: Advertising };

export default function PageDiscoverScreen() {
    const ads = useAds().ads;

    const renderedAds = ads.map((item, index) => (
        <View style={[viewStyles.clearContainer, { width: '30%' }]}>
            <Pressable
                onPress={() => Linking.openURL(item.url)}>
                <Image
                    source={{ uri: item.imagePath }}
                    style={{ height: 144, width: '100%' }}
                    resizeMode="contain"
                />
                <Text>Hola Mundo</Text>
            </Pressable>
        </View>
    ));

    return (
        <ImageBackground style={imageStyles.background}
            source={require('../../assets/images/Backgrounds/Leaf.png')}>
            <View style={viewStyles.container}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={
                        {
                            width: '100%',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around'
                        }}>
                        {renderedAds}
                        <Pressable style={[viewStyles.clearContainer, { width: '30%' }]}
                            onPress={() => { router.push("/pages/page_createAdvertising") }}>
                            <Image
                                source={require('../../assets/images/Advertising/your_ad_here.jpg')}
                                style={{ height: 144 }}
                                resizeMode="cover"
                            />
                            <Text>Create your own advertising!</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View >
        </ImageBackground >
    );
}