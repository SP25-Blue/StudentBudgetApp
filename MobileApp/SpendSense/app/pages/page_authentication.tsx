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
                    <View style={{ height: 100 }} />
                    <Text style={[textStyles.title, { backgroundColor: '#FFFFFF', borderRadius: 24 }]}> SpendSense </Text>
                    <View style={{ height: 100 }} />
                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() => { router.push("/pages/page_login") }}>
                        <Text style={textStyles.button}> Log In </Text>
                    </Pressable>
                    <View style={{ height: 100 }} />
                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() => { router.push("/pages/page_createAccount") }}>
                        <Text style={textStyles.button}> Create Account </Text>
                    </Pressable>
                </ScrollView>
            </View>
        </ImageBackground>
    );
}