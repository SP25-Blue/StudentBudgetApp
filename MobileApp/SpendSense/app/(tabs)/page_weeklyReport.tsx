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
    const data = [{ value: 30 }, { value: 800 }, { value: 90 }, { value: 70 }]

    return (
        <View style={viewStyles.container}>
            <ScrollView>
                <BarChart data={data} />
                <LineChart data={data} />
                <PieChart data={data} />
            </ScrollView>

            <Pressable style={({ pressed }) =>
                pressed ? buttonStyles.pressed : buttonStyles.active}
                onPress={() => { router.push("/pages/page_createPayment") }}>
                <Text style={textStyles.button}> Create Payment </Text>
            </Pressable>
        </View >
    );
}
