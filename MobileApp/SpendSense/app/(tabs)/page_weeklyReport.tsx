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

export default function PageWeeklyReportScreen() {

    const currentUser = useUser().user;
    if (currentUser === undefined) return undefined;

    const payments = currentUser.payments;


    const paymentsData: any[] = []
    payments.forEach(payment => {
        paymentsData.push({
            value: payment.amount,
            label: payment.name
        })
    });

    return (
        <View style={viewStyles.container}>
            <Pressable style={({ pressed }) =>
                pressed ? buttonStyles.pressed : buttonStyles.active}
                onPress={() => { router.push("/pages/page_createPayment") }}>
                <Text style={textStyles.button}> Create Payment </Text>
            </Pressable>

            <BarChart data={paymentsData} />
        </View >
    );
}
