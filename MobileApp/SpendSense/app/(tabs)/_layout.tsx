
import { Tabs, router } from 'expo-router';
import { Pressable } from 'react-native';

import { MaterialIcons, FontAwesome, AntDesign, Entypo, Fontisto } from '@expo/vector-icons';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  const icon_size = 24;
  const color = "black";

  return (
    <Tabs screenOptions={{}}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <Entypo name="home" color={color} icon_size={icon_size} />,
          headerRight: () => (
            <Pressable
              onPress={() => { router.replace("/pages/page_authentication") }}>
              <MaterialIcons name="account-circle" color={color} icon_size={icon_size} />
            </Pressable>
          ),
        }}
      />

      < Tabs.Screen
        name="page_discover"
        options={{
          title: 'Discover',
          tabBarIcon: () => <Fontisto name="world" color={color} icon_size={icon_size} />
        }}
      />

      < Tabs.Screen
        name="page_debug"
        options={{
          title: 'Debug',
          tabBarIcon: () => <MaterialIcons name="account-circle" color={color} icon_size={icon_size} />
        }}
      />
    </Tabs >
  );
}
