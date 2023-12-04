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
        let date = payment.date;

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
        let date = payment.date;

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

    return (
        <View style={viewStyles.container}>
            <Pressable style={({ pressed }) =>
                pressed ? buttonStyles.pressed : buttonStyles.active}
                onPress={() => { router.push("/pages/page_createPayment") }}>
                <Text style={textStyles.button}> Create Payment </Text>
            </Pressable>
            {WeekBarChart(payments)}
        </View >
    );
}
