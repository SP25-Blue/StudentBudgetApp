import React, { useState } from 'react';

import {
    Text,
    TextInput,
    View,
    Pressable,
    ImageBackground,
    ScrollView
} from 'react-native';

import { buttonStyles, imageStyles, textStyles, viewStyles, inputStyles } from '../../constants/Styles';

import { UsersDatabase } from '../../core/services/DatabaseService';
import { User } from '../../core/user/User';
import { useUser } from '../contexts/context';
import { router } from 'expo-router';




export default function PageCreateAccountScreen() {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [password2, onChangePassword2] = React.useState('');
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
                        placeholder='Enter username'
                    />
                    <View style={{ height: 20 }} />
                    <TextInput style={inputStyles.text}
                        value={password}
                        onChangeText={onChangePassword}
                        secureTextEntry={true}
                        placeholder='Enter password'
                    />
                    <View style={{ height: 20 }} />
                    <TextInput style={inputStyles.text}
                        value={password2}
                        onChangeText={onChangePassword2}
                        secureTextEntry={true}
                        placeholder='Enter password'
                    />
                    <View style={{ height: 100 }} />
                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() => {
                            let newUser = createUser(username, password, password2);
                            if (newUser) {
                                login(newUser);
                                router.push("/(tabs)")
                            }
                        }
                        }>
                        <Text style={textStyles.button}> Create Account </Text>
                    </Pressable>
                </ScrollView >
            </View>
        </ImageBackground>
    );
}

function createUser(username: string, password: string, password2: string): User | undefined {

    let now = new Date();
    console.log("\n{\n" + now.toLocaleTimeString())

    let validUsername = false;
    let validPassword = false;

    if (password === password2) {
        let newUser = new User(username, password)

        if (UsersDatabase.addUser(newUser)) {
            console.log('User added!');
            return newUser;
        } else {
            console.log('User not added!');
        }
    }
    else {
        console.log('Password does not match!');
    }

    now = new Date();
    console.log(now.toLocaleTimeString() + "\n}")
    return undefined;
} //TODO: Manage Errors