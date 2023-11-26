import React from 'react';
import {
    Text,
    View,
    Pressable,
    ImageBackground
} from 'react-native';
import { imageStyles } from '../../constants/Styles';

export default function PageDiscoverScreen() {
    return (
        <ImageBackground style={imageStyles.background}
            source={require('../../assets/images/Backgrounds/Leaf.png')}>
        </ImageBackground>
    );
}