
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import WebsiteScreen from '../screens/WebsiteScreen';
import { BottomTabParamList, HomeParamList, WebsiteParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Website"
        component={WebsiteNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="web" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}

const WebsiteStack = createStackNavigator<WebsiteParamList>();

function WebsiteNavigator() {
  return (
    <WebsiteStack.Navigator>
      <WebsiteStack.Screen
        name="WebsiteScreen"
        component={WebsiteScreen}
        options={{ headerTitle: 'Website' }}
      />
    </WebsiteStack.Navigator>
  );
}
