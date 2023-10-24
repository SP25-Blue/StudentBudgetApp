import { StyleSheet, Image, ScrollView } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function TabThreeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Dashboard</Text>
        <Image source ={require('../../assets/images/test/sample_budget_pie-chart.png')} style={styles.smallImage}/>
        <Image source ={require('../../assets/images/test/sample_monthly_spending.png')} style={styles.smallImage}/>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/three.tsx" />
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  smallImage: {
    width: '100%',
    resizeMode: 'contain'
  },
  
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
