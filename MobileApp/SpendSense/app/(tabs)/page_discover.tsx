import React from 'react';
import {
    Text,
    View,
    Pressable,
    ImageBackground,
    Linking
} from 'react-native';
import { imageStyles, viewStyles } from '../../constants/Styles';
import { useAds } from '../contexts/context';
import { Image } from 'react-native';
import { Advertising } from '../../core/ads/Advertising';
import { Link, router } from 'expo-router';

export default function PageDiscoverScreen() {
    const ads = useAds().ads;
    const uploadAd = useAds().uploadAd;

    //HACK: Manuallly added ads
    let ad = new Advertising(
        "Amazon Black Friday 2023",
        "See our latest offers",
        "https://sellersonar.com/blog/wp-content/uploads/2022/11/black-friday-2021-amazon.jpeg",
        "https://www.amazon.com/");
    uploadAd(ad);


    return (
        <ImageBackground style={imageStyles.background}
            source={require('../../assets/images/Backgrounds/Leaf.png')}>
            <View style={viewStyles.container}>
                <Pressable
                    onPress={() => { Linking.openURL(ad.url_path) }}>
                    <Image
                        source={{
                            uri: ad.image_path,
                        }}
                        width={100}
                        height={100} />
                </Pressable>
            </View>
        </ImageBackground>
    );
}