import React from 'react';
import {
    Text,
    View,
    Pressable,
    ImageBackground,
    ScrollView
} from 'react-native';

import { buttonStyles, imageStyles, textStyles, viewStyles } from '../../constants/Styles';
import { Link } from 'expo-router';

export default function PageAuthenticationScreen() {
    return (
        <ImageBackground style={imageStyles.background}
            source={require('../../assets/images/Backgrounds/Leaf.png')}>
            <View style={viewStyles.container}>
                <ScrollView>

                    <Link href="/pages/page_login">
                        <Pressable style={({ pressed }) =>
                            pressed ? buttonStyles.pressed : buttonStyles.active}
                            onPress={() => { console.log('page_authentication: button pressed (LOG IN)') }}>
                            <Text style={textStyles.button}> Log In </Text>
                        </Pressable>
                    </Link>

                    <Link href="/pages/page_createAccount">
                        <Pressable style={({ pressed }) =>
                            pressed ? buttonStyles.pressed : buttonStyles.active}
                            onPress={() => { console.log('page_authentication: button pressed (CREATE ACCOUNT)') }}>
                            <Text style={textStyles.button}> Create Account </Text>
                        </Pressable>
                    </Link>
                </ScrollView>
            </View>;
        </ImageBackground>
    );
}