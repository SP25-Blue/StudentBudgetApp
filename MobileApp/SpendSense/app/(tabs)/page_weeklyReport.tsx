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


function SimpleGraph(payments: Payment[]): React.JSX.Element {
    if (payments.length === 0) return (<Text>No data</Text>);

    let paymentsData: any[] = []
    payments.forEach(payment => {
        paymentsData.push({
            value: payment.amount,
            label: payment.name
        }); // https://gifted-charts.web.app/barchart
    });

    return (
        <BarChart data={paymentsData} />
    );
}


function SimpleLineGraph(payments: Payment[]): React.JSX.Element {
    if (payments.length === 0) return (<Text>No data</Text>);

    let paymentsData: any[] = []
    payments.forEach(payment => {
        paymentsData.push({
            value: payment.amount,
            label: payment.name
        }); // https://gifted-charts.web.app/barchart
    });

    return (
        <LineChart data={paymentsData} />
    );
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

            {SimpleGraph(payments)}
        </View >
    );
}
