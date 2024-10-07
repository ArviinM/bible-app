import {Tabs} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontFamily: 'SatoshiBold',
                        fontSize: 17.5,
                    },
                    headerTitleAlign: 'center',
                    headerShown: true,
                    title: 'Bible',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color}/>
                    ),
                }}
            />
        </Tabs>
    );
}
