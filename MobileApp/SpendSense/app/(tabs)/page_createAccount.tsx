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
import { UsersDatabase } from '../../core/services/DatabaseService';
import { User } from '../../core/user/User';

export default function PageCreateAccountScreen() {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [password2, onChangePassword2] = React.useState('');


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
                        onPress={() => createUser(username, password, password2)}>
                        <Text style={textStyles.button}> Create Account </Text>
                    </Pressable>
                </ScrollView >
            </View>
        </ImageBackground>
    );
}

function createUser(
    username: string,
    password: string,
    password2: string) {

    let now = new Date();
    console.log("{\n\n" + now.toLocaleTimeString())

    let validUsername = false;
    let validPassword = false;

    if (password === password2) {
        let newUser = new User(username, password)

        if (UsersDatabase.addUser(newUser)) {
            console.log('User added!')
            console.log(UsersDatabase.toString());
        } else {
            console.log('User not added!')
        }
    }
    else {
        console.log('Password does not match!')
    }

    now = new Date();
    console.log(now.toLocaleTimeString() + "\n}")
} //TODO: Manage Errors