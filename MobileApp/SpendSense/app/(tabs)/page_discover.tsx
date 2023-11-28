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
    return (
        <ImageBackground style={imageStyles.background}
            source={require('../../assets/images/Backgrounds/Leaf.png')}>
            <View style={viewStyles.container}>
                <Pressable style={({ pressed }) =>
                    pressed ? buttonStyles.pressed : buttonStyles.active}
                    onPress={() => { router.push("/pages/page_createAdvertising") }}>
                    <Text style={textStyles.button}> Create Advertising </Text>
                </Pressable>

                <FlatList
                    data={ads}
                    renderItem={({ item }) => <Item ad={item} />}
                    keyExtractor={item => item.name}
                />
            </View>
        </ImageBackground >
    );
}