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
                <ImageBackground style={{ height: 144, width: '100%' }}
                    source={{ uri: item.imagePath }}
                    resizeMode='cover'
                    blurRadius={4}>
                    <Image style={{ height: '100%', width: '100%' }}
                        source={{ uri: item.imagePath }}
                        resizeMode="contain"

                    />
                </ImageBackground>
                <View style={{ height: 52, width: '100%', flexDirection: 'row', justifyContent: 'space-around', overflow: 'hidden' }}>
                    <Text style={{ width: '20%' }} > {item.name}</Text>
                    <Text style={{ width: '80%' }} numberOfLines={3}>{item.description}</Text>
                </View>
            </Pressable >
        </View >
    ));

    const renderAd_YourAdHere = (
        <View style={[viewStyles.clearContainer, { width: '30%' }]}>
            <Pressable
                onPress={() => { router.push("/pages/page_createAdvertising") }}>
                <ImageBackground style={{ height: 144, width: '100%' }}
                    source={require('../../assets/images/Advertising/your_ad_here.jpg')}
                    resizeMode='cover'
                    blurRadius={4}>
                    <Image style={{ height: '100%', width: '100%' }}
                        source={require('../../assets/images/Advertising/your_ad_here.jpg')}
                        resizeMode="contain"

                    />
                </ImageBackground>
                <View style={{ height: 52, width: '100%', flexDirection: 'row', justifyContent: 'space-around', overflow: 'hidden' }}>
                    <Text style={{ width: '20%' }} > Your Add Here </Text>
                    <Text style={{ width: '80%' }} numberOfLines={3}>Click here to add your ad to SpendSense!</Text>
                </View>
            </Pressable >
        </View >
    );

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
                        {renderAd_YourAdHere}
                    </View>
                </ScrollView>
            </View >
        </ImageBackground >
    );
}