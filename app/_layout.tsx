import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/constants/queryClient";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        SatoshiBlack: require('../assets/fonts/Satoshi-Black.ttf'),
        SatoshiBlackItalic: require('../assets/fonts/Satoshi-BlackItalic.ttf'),
        SatoshiBold: require('../assets/fonts/Satoshi-Bold.ttf'),
        SatoshiBoldItalic: require('../assets/fonts/Satoshi-BoldItalic.ttf'),
        SatoshiItalic: require('../assets/fonts/Satoshi-Italic.ttf'),
        SatoshiLight: require('../assets/fonts/Satoshi-Light.ttf'),
        SatoshiLightItalic: require('../assets/fonts/Satoshi-LightItalic.ttf'),
        SatoshiMedium: require('../assets/fonts/Satoshi-Medium.ttf'),
        SatoshiMediumItalic: require('../assets/fonts/Satoshi-MediumItalic.ttf'),
        SatoshiRegular: require('../assets/fonts/Satoshi-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                    <Stack.Screen name="+not-found"/>
                </Stack>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
