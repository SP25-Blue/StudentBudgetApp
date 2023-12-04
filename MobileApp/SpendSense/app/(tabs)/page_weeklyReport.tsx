import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

import {
    Pressable,
    SectionList,
    Text,
    View
} from 'react-native';

import { buttonStyles, textStyles, viewStyles } from '../../constants/Styles';
import { useUser } from '../contexts/context';
import { ScrollView } from "react-native-gesture-handler";
import { router } from "expo-router";
import { Payment } from "../../core/user/Payment";
import React from "react";

const WeekBarChart = (payments: Payment[]) => {
    if (payments.length === 0) return (<Text>No data</Text>);

    const sundayData = { value: 0, label: 'Sun' }
    const mondayData = { value: 0, label: 'Mon' }
    const tuesdayData = { value: 0, label: 'Tue' }
    const wednesdayData = { value: 0, label: 'Wed' }
    const thursdayData = { value: 0, label: 'Thu' }
    const fridayData = { value: 0, label: 'Fri' }
    const saturdayData = { value: 0, label: 'Sat' }

    payments.forEach(payment => {
        let amount = payment.amount;
        let date = new Date(payment.date);    //FIXME date is being parsed to string after JSON
        console.log(typeof (date));

        if (date.getDay() === 0) sundayData.value += amount;
        else if (date.getDay() === 1) mondayData.value += amount;
        else if (date.getDay() === 2) tuesdayData.value += amount;
        else if (date.getDay() === 3) wednesdayData.value += amount;
        else if (date.getDay() === 4) thursdayData.value += amount;
        else if (date.getDay() === 5) fridayData.value += amount;
        else if (date.getDay() === 6) saturdayData.value += amount;

    })

    let paymentsData: any[] = []
    paymentsData.push(sundayData);
    paymentsData.push(mondayData);
    paymentsData.push(tuesdayData);
    paymentsData.push(wednesdayData);
    paymentsData.push(thursdayData);
    paymentsData.push(fridayData);
    paymentsData.push(saturdayData);

    return (<BarChart
        showYAxisIndices
        noOfSections={4}
        barWidth={20}
        sideWidth={15}
        isThreeD
        height={420}
        side="right"
        data={paymentsData}
        isAnimated />);
}

const WeekPieChart = (payments: Payment[]) => {
    if (payments.length === 0) return (<Text>No data</Text>);

    const sundayData = { value: 0, label: 'Sun' }
    const mondayData = { value: 0, label: 'Mon' }
    const tuesdayData = { value: 0, label: 'Tue' }
    const wednesdayData = { value: 0, label: 'Wed' }
    const thursdayData = { value: 0, label: 'Thu' }
    const fridayData = { value: 0, label: 'Fri' }
    const saturdayData = { value: 0, label: 'Sat' }

    payments.forEach(payment => {
        let amount = payment.amount;
        let date = new Date(payment.date);    //FIXME date is being parsed to string after JSON

        if (date.getDay() === 0) sundayData.value += amount;
        else if (date.getDay() === 1) mondayData.value += amount;
        else if (date.getDay() === 2) tuesdayData.value += amount;
        else if (date.getDay() === 3) wednesdayData.value += amount;
        else if (date.getDay() === 4) thursdayData.value += amount;
        else if (date.getDay() === 5) fridayData.value += amount;
        else if (date.getDay() === 6) saturdayData.value += amount;

    })

    let paymentsData: any[] = []
    paymentsData.push(mondayData);
    paymentsData.push(tuesdayData);
    paymentsData.push(wednesdayData);
    paymentsData.push(thursdayData);
    paymentsData.push(fridayData);
    paymentsData.push(saturdayData);
    paymentsData.push(sundayData);

    return (
        <View>
            <View style={{ height: 100 }} />
            <PieChart
                data={paymentsData}
                radius={160} />
        </View>);
}


export default function PageWeeklyReportScreen() {

    const currentUser = useUser().user;
    if (currentUser === undefined) return undefined;
    const payments = currentUser.payments;

    const [chartNumber, setChartNumber] = React.useState(0);

    return (
        <View style={viewStyles.container}>
            <View />
            <Pressable style={({ pressed }) =>
                pressed ? buttonStyles.pressed : buttonStyles.active}
                onPress={() => {
                    setChartNumber((chartNumber + 1) % 2)
                }}>
                <Text style={textStyles.button}> Toggle Chart </Text>
            </Pressable>

            {chartNumber == 0 ? WeekBarChart(payments) : WeekPieChart(payments)}

        </View >
    );
}
