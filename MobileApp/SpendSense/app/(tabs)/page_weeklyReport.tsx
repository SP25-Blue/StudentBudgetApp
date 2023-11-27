import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

import {
    Pressable,
    SectionList,
    Text,
    View
} from 'react-native';

import { textStyles, viewStyles } from '../../constants/Styles';
import { useUser } from '../contexts/context';
import { ScrollView } from "react-native-gesture-handler";

export default function PageWeeklyReportScreen() {
    const currentUser = useUser().user;

    if (currentUser === undefined) return undefined;
    const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }]

    return (
        <View style={viewStyles.container}>
            <ScrollView>
                <BarChart data={data} />
                <LineChart data={data} />
                <PieChart data={data} />
            </ScrollView>
        </View >
    );
}
