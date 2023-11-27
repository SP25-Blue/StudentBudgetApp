import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { UserContext, UserProvider } from './contexts/context';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <UserProvider>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ presentation: 'modal' }} />
          <Stack.Screen
            name="pages/page_authentication"
            options={{ presentation: 'modal' }} />
          <Stack.Screen
            name="pages/page_createAccount"
            options={{ presentation: 'modal' }} />
          <Stack.Screen
            name="pages/page_login"
            options={{ presentation: 'modal' }} />
          <Stack.Screen
            name="pages/page_createPayment  "
            options={{ presentation: 'modal' }} />
        </Stack>
      </UserProvider>
    </ThemeProvider>
  );
}
