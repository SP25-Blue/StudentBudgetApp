import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { View, Text } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Separator } from '../constants/Separators';
import { textStyles, viewStyles } from '../constants/Styles';

export default function ModalScreen() {
  return (
    <View style={viewStyles.container}>
      <Text style={textStyles.title}>Modal</Text>
      <Separator />
      <EditScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
