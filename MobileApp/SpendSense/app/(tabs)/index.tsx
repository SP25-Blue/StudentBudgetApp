import { ScrollView, SectionList, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: 'You have saved: $100 this week!', data: ['Saved $25 on gas', 'Saved $75 on groceries'] },
            {
              title: 'You gained 15 points this week! \n (Ranked #4 out of 10 friends)',
              data: [
                'Gained 5 points for using our grocery discount',
                'Gained 9 points for spending 50% less on gas',
                'Gained 1 point for spending 20% less on clothing',
              ],

            },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={item => `basicListEntry-${item}`}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 22,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});
