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
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';


export default function PageCreatePaymentScreen() {
    const [name, onChangeName] = React.useState('');
    const [amount, onChangeAmount] = React.useState('');
    const [date, setDate] = React.useState(new Date());

    const [open, setOpen] = useState(false)

    const currentUser = useUser().user;

    const setDate_helper = (event: any, date: any) => {     //HACK: Set to any
        if (date !== undefined) {
            setDate(date);
            // Do something with the selected date
        }
        setOpen(false);
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
                        value={name}
                        onChangeText={onChangeName}
                        placeholder='Enter payment name'
                    />
                    <TextInput style={inputStyles.text}
                        value={amount}
                        keyboardType='numeric'
                        onChangeText={onChangeAmount}
                        placeholder='$ 0.00'
                    />
                    <TextInput style={inputStyles.text}
                        value={date.toString()}
                    />
                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() =>
                            setOpen(true)
                        }>
                        <Text style={textStyles.button}> Create Account </Text>
                    </Pressable>
                    {
                        open &&
                        <RNDateTimePicker
                            value={date}
                            mode="date"
                            onChange={setDate_helper} />
                    }
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