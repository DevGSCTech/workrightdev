import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons name="maps-home-work" size={25} color="#000000" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialIcons 
                    name="menu-open" 
                    size={25} 
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Time Clock',
          tabBarIcon: ({ color }) => <MaterialIcons name="punch-clock" size={25} color="#000077" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialIcons 
                    name="menu-open" 
                    size={25} 
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
        title: 'Jobs',
        tabBarIcon: ({ color }) => <FontAwesome name="list-alt" size={25} color="#550000" />,
        headerRight: () => (
          <Link href="/modal" asChild>
            <Pressable>
              {({ pressed }) => (
                <MaterialIcons 
                  name="menu-open" 
                  size={25} 
                  color={Colors[colorScheme ?? 'light'].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
              )}
            </Pressable>
          </Link>
        ),
      }}
    />
      <Tabs.Screen
        name="four"
        options={{
        title: 'Payments',
        tabBarIcon: ({ color }) => <MaterialIcons name="attach-money" size={25} color="#005500" />,
        headerRight: () => (
          <Link href="/modal" asChild>
            <Pressable>
              {({ pressed }) => (
                <MaterialIcons 
                  name="menu-open" 
                  size={25} 
                  color={Colors[colorScheme ?? 'light'].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
              )}
            </Pressable>
          </Link>
        ),
      }}
    />
    </Tabs>
  );
}
