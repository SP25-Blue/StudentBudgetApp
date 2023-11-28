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

import { router } from 'expo-router';
import { useAds } from '../contexts/context';
import { Advertising } from '../../core/ads/Advertising';

export default function PageCreateAdvertisingScreen() {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [imagePath, setImagePath] = React.useState('');

    const uploadAd = useAds().uploadAd;

    return (
        <ImageBackground style={imageStyles.background}
            source={require('../../assets/images/Backgrounds/Leaf.png')}>
            <View style={viewStyles.container}>
                <ScrollView>
                    <Text style={textStyles.button}>
                        Welcome to SpendSense!
                    </Text>
                    <TextInput style={inputStyles.text}
                        value={name}
                        onChangeText={setName}
                        placeholder='Enter Name'
                    />
                    <TextInput style={inputStyles.text}
                        value={description}
                        onChangeText={setDescription}
                        multiline={true}
                        placeholder='Enter Description'
                    />
                    <TextInput style={inputStyles.text}
                        value={url}
                        onChangeText={setUrl}
                        placeholder='Enter URL'
                    />
                    <TextInput style={inputStyles.text}
                        value={imagePath}
                        onChangeText={setImagePath}
                        placeholder='Enter ImagePath'
                    />

                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() => {
                            let newAd = new Advertising(name, description, url, imagePath);
                            uploadAd(newAd);
                            router.push("/(tabs)/page_discover");
                        }}>
                        <Text style={textStyles.button}> Create Advertising </Text>
                    </Pressable>
                </ScrollView >
            </View>
        </ImageBackground>
    );
}
/*
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
} //TODO: Manage Errors*/