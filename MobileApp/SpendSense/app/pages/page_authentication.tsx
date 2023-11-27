import React from 'react';
import {
    Text,
    View,
    Pressable,
    ImageBackground,
    ScrollView
} from 'react-native';

import { buttonStyles, imageStyles, textStyles, viewStyles } from '../../constants/Styles';
import { router } from 'expo-router';

export default function PageAuthenticationScreen() {
    return (
        <ImageBackground style={imageStyles.background}
            source={require('../../assets/images/Backgrounds/Leaf.png')}>
            <View style={viewStyles.container}>
                <ScrollView>
                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() => { router.replace("/pages/page_login") }}>
                        <Text style={textStyles.button}> Log In </Text>
                    </Pressable>
                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() => { router.replace("/pages/page_createAccount") }}>
                        <Text style={textStyles.button}> Create Account </Text>
                    </Pressable>
                </ScrollView>
            </View>
        </ImageBackground>
    );
}