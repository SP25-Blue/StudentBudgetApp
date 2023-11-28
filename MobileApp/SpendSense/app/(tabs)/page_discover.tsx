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

const Item = ({ ad }: ItemProps) => (
    <View>
        <Text> {ad.name} </Text>
        <Text> {ad.description} </Text>
        <Text> {ad.url} </Text>
        <Text> {ad.imagePath} </Text>
    </View>
);

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
                <ScrollView>
                    <FlatList
                        data={ads}
                        renderItem={({ item }) => <Item ad={item} />}
                        keyExtractor={item => item.name}
                    />
                    <Pressable
                        onPress={() => { Linking.openURL(ad.url) }}>
                        <Image
                            source={{
                                uri: ad.imagePath,
                            }}
                            width={100}
                            height={100} />
                    </Pressable>
                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() => { router.push("/pages/page_createAdvertising") }}>
                        <Text style={textStyles.button}> Create Advertising </Text>
                    </Pressable>
                </ScrollView>
            </View>
        </ImageBackground>
    );
}