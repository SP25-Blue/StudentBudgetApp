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

const AdvertisingItem = (ad: Advertising) => (
    <View style={{ width: '100%', padding: 8 }}>
        <Pressable
            onPress={() => { Linking.openURL(ad.url) }}>
            <Text style={[textStyles.title, { backgroundColor: '#FFFFFF', borderTopLeftRadius: 16, borderTopRightRadius: 16 }]}
                numberOfLines={1} > {ad.name} </Text>
            <ImageBackground style={{ height: 144, width: '100%', backgroundColor: '#FFFFFF' }}
                source={{ uri: ad.imagePath }}
                resizeMode='cover'
                blurRadius={4}>
                <Image style={{ height: '100%', width: '100%' }}
                    source={{ uri: ad.imagePath }}
                    resizeMode="contain"
                />
            </ImageBackground>
            <Text style={[textStyles.text, { backgroundColor: '#F0F0F0', padding: 8 }]}
                numberOfLines={3}> {ad.description} </Text>
        </Pressable >
    </View >
);


const YourAdHere_Element = (
    <View style={{ width: '100%', padding: 8 }}>
        <Pressable
            onPress={() => { router.push("/pages/page_createAdvertising") }}>
            <Text style={[textStyles.title, { backgroundColor: '#FFFFFF', borderTopLeftRadius: 16, borderTopRightRadius: 16 }]}
                numberOfLines={1} > Your add here </Text>
            <ImageBackground style={{ height: 144, width: '100%', backgroundColor: '#FFFFFF' }}
                source={require('../../assets/images/Advertising/your_ad_here.jpg')}
                resizeMode='cover'
                blurRadius={4}>
                <Image style={{ height: '100%', width: '100%' }}
                    source={require('../../assets/images/Advertising/your_ad_here.jpg')}
                    resizeMode="contain"
                />
            </ImageBackground>
            <Text style={[textStyles.text, { backgroundColor: '#F0F0F0', padding: 8 }]}
                numberOfLines={3}> Click here to add your ad to SpendSense! </Text>
        </Pressable >
    </View >
);

export default function PageDiscoverScreen() {
    const ads = useAds().ads;

    return (
        <ImageBackground style={imageStyles.background}
            source={require('../../assets/images/Backgrounds/Leaf.png')}>
            <View style={viewStyles.container}>
                <FlatList style={{ width: '100%' }}
                    ListHeaderComponent={<View></View>}
                    ListFooterComponent={YourAdHere_Element}
                    data={ads}
                    renderItem={({ item }) =>
                        <AdvertisingItem
                            name={item.name}
                            description={item.description}
                            imagePath={item.imagePath}
                            url={item.url} />}
                    keyExtractor={item => item.name + '\n' + item.description} />
            </View >
        </ImageBackground >
    );
}