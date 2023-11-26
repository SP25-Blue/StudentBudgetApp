import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome
    size={28}
    style={{ marginBottom: -3 }}
    {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) =>
            <TabBarIcon
              name="home"
              color={color} />,
          headerRight: () => (
            <Link
              href="/pages/page_authentication"
              asChild>
              <Pressable>
                <MaterialIcons
                  name="account-circle"
                  size={24}
                  color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />

      <Tabs.Screen
        name="page_debug"
        options={{
          title: 'Debug',
          tabBarIcon: ({ color }) =>
            <AntDesign
              name="piechart"
              size={24}
              color={color} />,
        }}
      />
    </Tabs>
  );
}
