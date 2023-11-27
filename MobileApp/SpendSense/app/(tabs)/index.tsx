import {
  Pressable,
  SectionList,
  Text,
  View
} from 'react-native';

import { textStyles, viewStyles } from '../../constants/Styles';
import { useUser } from '../contexts/context';

export default function HomeScreen() {
  const currentUser = useUser().user;

  if (currentUser === undefined) return undefined;

  return (
    <View style={viewStyles.container}>

      <Text style={textStyles.title}>SpendSense</Text>
      <Text>Welcome, {currentUser.username}!</Text>

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
