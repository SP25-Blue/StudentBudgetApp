import {
  FlatList,
  ImageBackground,
  Pressable,
  SectionList,
  Text,
  View
} from 'react-native';

import { buttonStyles, imageStyles, textStyles, viewStyles } from '../../constants/Styles';
import { useUser } from '../contexts/context';
import { Payment } from '../../core/user/Payment';
import { router } from 'expo-router';


const PaymentItem = (payment: Payment) => {
  const date = new Date(payment.date);


  return (<View style={{ width: '100%', padding: 8, borderColor: '#00FF00', borderRadius: 5 }}>
    <Text style={[textStyles.title, { backgroundColor: '#FFFFFF', borderTopLeftRadius: 16, borderTopRightRadius: 16 }]}
      numberOfLines={1} > {payment.name} </Text>
    <Text style={[textStyles.text, { backgroundColor: '#F0F0F0', padding: 8 }]}>
      You spent ${payment.amount} on {date.toISOString()}
    </Text>
    {payment.wasCompleted ?
      <Text style={[textStyles.text, { backgroundColor: '#F08080', padding: 8 }]}>Uncompleted. Remember to pay soon!</Text> :
      <Text style={[textStyles.text, { color: '#ffffff', backgroundColor: '#8080F0', padding: 8 }]}>Completed. Points won: {payment.amount / 10}!!!</Text>}
  </View >);
}

export default function HomeScreen() {
  const currentUser = useUser().user;

  if (currentUser === undefined) return undefined;

  return (
    <ImageBackground style={imageStyles.background}
      source={require('../../assets/images/Backgrounds/Leaf.png')}>
      <View style={viewStyles.container}>
        <FlatList style={{ width: '100%' }}
          ListHeaderComponent={
            <View>
              <Text style={[textStyles.title, { backgroundColor: '#F0F0F0' }]}>SpendSense</Text>
              <Text style={[textStyles.text, { backgroundColor: '#F0F0F0', textAlign: 'center' }]}>Welcome, {currentUser.username}!</Text>
              <View style={{ height: 20 }} />
            </View>}
          ListFooterComponent={
            <Pressable style={({ pressed }) =>
              pressed ? buttonStyles.pressed : buttonStyles.active}
              onPress={() => { router.push("/pages/page_createPayment") }}>
              <Text style={textStyles.button}> Create Payment </Text>
            </Pressable>
          }
          data={currentUser.payments}
          renderItem={({ item }) =>
            <PaymentItem
              name={item.name}
              amount={item.amount}
              date={item.date}
              wasCompleted={item.wasCompleted}
              frequencyInDays={0} />}
          keyExtractor={item => item.name + '\n' + item.amount} />
      </View >
    </ImageBackground >
  );
}
