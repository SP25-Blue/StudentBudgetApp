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
                    <View style={{ height: 20 }} />

                    <Text style={[textStyles.title, { backgroundColor: '#FFFFFF', borderRadius: 24 }]}> SpendSense </Text>
                    <View style={{ height: 100 }} />

                    <TextInput style={inputStyles.text}
                        value={name}
                        onChangeText={onChangeName}
                        placeholder='Enter payment name'
                    />
                    <View style={{ height: 20 }} />

                    <TextInput style={inputStyles.text}
                        value={amount}
                        keyboardType='numeric'
                        onChangeText={onChangeAmount}
                        placeholder='Enter ammount in dolars'
                    />
                    <View style={{ height: 20 }} />

                    <Text style={inputStyles.text}>{date.toDateString()}</Text>
                    {
                        open &&
                        <RNDateTimePicker
                            value={date}
                            mode="date"
                            onChange={setDate_helper} />
                    }
                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() => {
                            setOpen(true);
                        }
                        }>
                        <Text style={textStyles.button}> Pick a Date </Text>
                    </Pressable>
                </ScrollView >
            </View >
        </ImageBackground >
    );
}