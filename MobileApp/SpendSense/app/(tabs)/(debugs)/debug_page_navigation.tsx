import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Text, View, Pressable, useColorScheme } from 'react-native';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function DebugPageNavigationScreen() {
    const colorScheme = useColorScheme();

    return (
        <View>
            <Text>Hola Mundito2</Text>
        </View>
    );
}