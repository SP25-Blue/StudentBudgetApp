import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Text, View, Pressable, useColorScheme } from 'react-native';
import DebugPageDimentionsScreen from '../debug/debug_page_dimentions';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function PageDebug() {
    return <DebugPageDimentionsScreen />
}