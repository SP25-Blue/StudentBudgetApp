import {
  Pressable,
  SectionList,
  Text,
  View
} from 'react-native';

import { textStyles, viewStyles } from '../../constants/Styles';
import { ApplicationService } from '../../core/services/ApplicationService';
import { User } from '../../core/user/User'
import { Link } from 'expo-router';
import { useContext, useState } from 'react';
import { UserContext, useUser } from '../contexts/context';

export default function TabOneScreen() {
  const currentUser = useUser().user;
  /*
  if (currentUser === undefined) {
    return (
      <View>
        <Text style={textStyles.text}>
          <Link href={'/pages/page_createAccount'}>
            [Sign Up]
          </Link>
          or
          <Link href={'/pages/page_authentication'}>
            [Log In]
          </Link>
        </Text>
        <Pressable onPress={() => console.log(currentUser)}>
          <Text>Hola</Text>
        </Pressable>
      </View>
    );
  }
  else {
    return (
      <View style={viewStyles.container}>
        <Text style={textStyles.title}>Home</Text>
        <Text style={textStyles.title}>Welcome, {currentUser.username}</Text>
        <View style={viewStyles.container}>
          <SectionList
            sections={[
              {
                title: 'You have saved: $100 this week!',
                data: ['Saved $25 on gas', 'Saved $75 on groceries']
              },
              {
                title: 'You gained 15 points this week! \n (Ranked #4 out of 10 friends)',
                data: [
                  'Gained 5 points for using our grocery discount',
                  'Gained 9 points for spending 50% less on gas',
                  'Gained 1 point for spending 20% less on clothing',
                ],
              },
            ]}
            renderSectionHeader={({ section }) => <Text style={textStyles.sectionHeader}>{section.title}</Text>}
            renderItem={({ item }) => <Text style={textStyles.item}>{item}</Text>}
            keyExtractor={item => `basicListEntry-${item}`}
          />
        </View>
      </View >
    );*/
  return (
    <View style={viewStyles.container}>
      <Text style={textStyles.title}>Home</Text>
      {currentUser === undefined ? <Text>Please log in.</Text> : <Text>Welcome, {currentUser.username}!</Text>}
      <View style={viewStyles.container}>
        <SectionList
          sections={[
            {
              title: 'You have saved: $100 this week!',
              data: ['Saved $25 on gas', 'Saved $75 on groceries']
            },
            {
              title: 'You gained 15 points this week! \n (Ranked #4 out of 10 friends)',
              data: [
                'Gained 5 points for using our grocery discount',
                'Gained 9 points for spending 50% less on gas',
                'Gained 1 point for spending 20% less on clothing',
              ],
            },
          ]}
          renderSectionHeader={({ section }) => <Text style={textStyles.sectionHeader}>{section.title}</Text>}
          renderItem={({ item }) => <Text style={textStyles.item}>{item}</Text>}
          keyExtractor={item => `basicListEntry-${item}`}
        />
      </View>
    </View >
  );
}
