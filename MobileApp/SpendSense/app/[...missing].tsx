import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { textStyles, viewStyles } from '../constants/Styles';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={viewStyles.container}>
        <Text style={textStyles.title}>This screen doesn't exist.</Text>

        <Link href="/">
          <Text style={textStyles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
