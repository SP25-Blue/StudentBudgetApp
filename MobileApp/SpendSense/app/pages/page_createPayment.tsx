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
import DropDownPicker from 'react-native-dropdown-picker';


export default function PageCreatePaymentScreen() {

    const [name, onChangeName] = React.useState('');
    const [amount, onChangeAmount] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [wasPayed, setWasPayed] = React.useState(false);

    const [openCalendar, setOpenCalendar] = useState(false);
    const [openPayedDropDown, setOpenPayedDropDown] = useState(false);

    const [items, setItems] = useState([
        { label: 'Payed', value: true },
        { label: 'Unpayed', value: false }
    ]);

    const currentUser = useUser().user;

    const setDate_helper = (event: any, date: any) => {     //HACK: Set to any
        if (date !== undefined) {
            setDate(date);
            // Do something with the selected date
        }
        setOpenCalendar(false);
    };

    DropDownPicker.setListMode("SCROLLVIEW");   //HACK DropDownPicker.setListMode("SCROLLVIEW");

    return (
        <ImageBackground style={imageStyles.background}
            source={require('../../assets/images/Backgrounds/Leaf.png')}>
            <View style={viewStyles.container}>
                <ScrollView nestedScrollEnabled={true}>
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
                        openCalendar &&
                        <RNDateTimePicker
                            value={date}
                            mode="date"
                            onChange={setDate_helper} />
                    }
                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() => {
                            setOpenCalendar(true);
                        }
                        }>
                        <Text style={textStyles.button}> Pick a Date </Text>
                    </Pressable>
                    <View style={{ height: 20 }} />

                    <DropDownPicker
                        open={openPayedDropDown}
                        value={wasPayed}
                        items={items}
                        setOpen={setOpenPayedDropDown}
                        setValue={setWasPayed}
                        style={{ width: 'auto' }}
                    />
                </ScrollView >
            </View >
        </ImageBackground >
    );
}