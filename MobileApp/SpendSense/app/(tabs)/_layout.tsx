
import { Tabs, router } from 'expo-router';
import { Pressable, View } from 'react-native';

import { MaterialIcons, FontAwesome, AntDesign, Entypo, Fontisto } from '@expo/vector-icons';
import { useUser } from '../contexts/context';
import PageAuthenticationScreen from '../pages/page_authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/


function TabLayout_LoggedIn(): React.JSX.Element | undefined {
  const icon_size = 40;
  const color = "black";

  return (
    <Tabs screenOptions={{}}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <Entypo name="home" color={color} icon_size={icon_size} />,
          headerRight: () => (
            <Pressable style={{ margin: 10 }}
              onPress={() => { router.replace("/pages/page_authentication") }}>
              <MaterialIcons name="account-circle" color={color} icon_size={icon_size} />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable style={{ margin: 10 }}
              onPress={async () => { await AsyncStorage.clear() }}>
              <MaterialIcons name="delete-forever" color={color} icon_size={icon_size} />
            </Pressable>
          )
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
        name="page_weeklyReport"
        options={{
          title: 'Weekly Report',
          tabBarIcon: () => <MaterialIcons name="calendar-today" color={color} icon_size={icon_size} />
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


export default function TabLayout() {
  const currentUser = useUser().user;

  return currentUser === undefined ?
    <PageAuthenticationScreen /> : <TabLayout_LoggedIn />
}
