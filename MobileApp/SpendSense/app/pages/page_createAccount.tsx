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




export default function PageCreateAccountScreen() {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [password2, onChangePassword2] = React.useState('');
    const { login } = useUser();


    const handleLogin = () => {
        // Perform login logic and get user data
        const userData: User = new User("test_user", "password");

        // Update user context with the logged-in user
        login(userData);
    };

    return (
        <ImageBackground style={imageStyles.background}
            source={require('../../assets/images/Backgrounds/Leaf.png')}>
            <View style={viewStyles.container}>
                <ScrollView>
                    <Text style={textStyles.button}>
                        Welcome to SpendSense!
                    </Text>
                    <TextInput style={inputStyles.text}
                        value={username}
                        onChangeText={onChangeUsername}
                        placeholder='Enter username'
                    />
                    <TextInput style={inputStyles.text}
                        value={password}
                        onChangeText={onChangePassword}
                        secureTextEntry={true}
                        placeholder='Enter password'
                    />
                    <TextInput style={inputStyles.text}
                        value={password2}
                        onChangeText={onChangePassword2}
                        secureTextEntry={true}
                        placeholder='Enter password'
                    />
                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() => {
                            let newUser = createUser(username, password, password2);
                            if (newUser) login(newUser);
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