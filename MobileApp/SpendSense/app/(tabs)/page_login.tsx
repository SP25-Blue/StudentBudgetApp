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
                        placeholder='Username'
                    />
                    <TextInput style={inputStyles.text}
                        value={password}
                        onChangeText={onChangePassword}
                        secureTextEntry={true}
                        placeholder='Password'
                    />
                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() => logIn(username, password)}>
                        <Text style={textStyles.button}> Log In </Text>
                    </Pressable>
                </ScrollView >
            </View>
        </ImageBackground>
    );
}

function logIn(
    username: string,
    password: string) {

    let now = new Date();
    console.log("\n{\n" + now.toLocaleTimeString())

    let user = UsersDatabase.getUser_UsernamePassword(username, password);

    if (user === undefined)
        console.log('User not found')
    else
        console.log('User found')

    console.log(now.toLocaleTimeString() + "\n}")
} //TODO: Manage Errors