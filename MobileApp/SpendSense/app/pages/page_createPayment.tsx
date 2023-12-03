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

import { User } from '../../core/user/User';
import { useUser } from '../contexts/context';
import { router } from 'expo-router';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { Payment } from '../../core/user/Payment';


export default function PageCreatePaymentScreen() {

    const currentUser = useUser().user;
    if (currentUser === undefined) return undefined;

    const payments = currentUser.payments;

    const [name, onChangeName] = React.useState('');
    const [amount_str, onChangeAmountStr] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [wasCompleted, setWasCompleted] = React.useState(false);

    const [openCalendar, setOpenCalendar] = useState(false);
    const [openPayedDropDown, setOpenPayedDropDown] = useState(false);

    const [items, setItems] = useState([
        { label: 'Unpayed', value: false },
        { label: 'Payed', value: true },
    ]);

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
                        value={amount_str}
                        inputMode='numeric'
                        onChangeText={onChangeAmountStr}
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
                        value={wasCompleted}
                        items={items}
                        setItems={setItems}
                        setOpen={setOpenPayedDropDown}
                        setValue={setWasCompleted}
                        style={{ width: 'auto' }}
                    />
                    <View style={{ height: 100 }} />

                    <Pressable style={({ pressed }) =>
                        pressed ? buttonStyles.pressed : buttonStyles.active}
                        onPress={() => {
                            let amount = Number(amount_str)
                            let newPayment = new Payment(name, amount, date, wasCompleted);

                            payments.push(newPayment);
                            router.replace('/page_weeklyReport');
                        }
                        }>
                        <Text style={textStyles.button}> Add Payment </Text>
                    </Pressable>
                </ScrollView >
            </View >
        </ImageBackground >
    );
}