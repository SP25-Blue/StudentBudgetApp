import React from 'react';

import {
    Text,
    TextInput,
    View,
    Pressable,
    ImageBackground,
    ScrollView
} from 'react-native';

import { buttonStyles, imageStyles, textStyles, viewStyles, inputStyles } from '../../constants/Styles';

import { User } from '../../core/user/User';
import { useUser } from '../contexts/context';
import { router } from 'expo-router';
import { UserStorage } from '../../storage/UserStorage';

export default function PageCreateAccountScreen() {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const { login } = useUser();

    return (
        <ImageBackground style={imageStyles.background}
            source={require('../../assets/images/Backgrounds/Leaf.png')}>
            <View style={viewStyles.container}>
                <ScrollView>
                    <View style={{ height: 20 }} />

                    <Text style={[textStyles.title, { backgroundColor: '#FFFFFF', borderRadius: 24 }]}> SpendSense </Text>
                    <View style={{ height: 100 }} />

                    <TextInput style={inputStyles.text}
                        value={username}
                        onChangeText={onChangeUsername}
                        placeholder='Username'
                    />

                    <View style={{ height: 20 }} />

                    <TextInput style={inputStyles.text}
                        value={password}
                        onChangeText={onChangePassword}
                        secureTextEntry={true}
                        placeholder='Password'
                    />

                    <View style={{ height: 100 }} />

                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() => {
                            UserStorage.getUser(username, password).then((value) => {
                                let user = value;
                                console.log('*', user);
                                if (user) {
                                    login(user);
                                    router.push("/(tabs)");
                                } else {
                                    //TODO Report error 
                                }
                            });

                        }}>
                        <Text style={textStyles.button}> Log In </Text>
                    </Pressable>
                </ScrollView >
            </View>
        </ImageBackground >
    );
}