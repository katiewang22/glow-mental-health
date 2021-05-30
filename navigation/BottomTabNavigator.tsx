
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';
import WebsiteScreen from '../screens/WebsiteScreen';
import WritingScreen from '../screens/WritingScreen';
import JournalScreen from '../screens/JournalScreen';
import DrawingScreen from '../screens/DrawingScreen';
import { BottomTabParamList, HomeParamList, JournalParamList, DrawingParamList, WebsiteParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ 
        activeTintColor: '#F28482',
        inactiveBackgroundColor: '#F7EDE2',
        activeBackgroundColor: '#F7EDE2',
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Journal"
        component={JournalNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-journal" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Drawing"
        component={DrawingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="brush" color={color} />,
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
        options={{ 
          headerTitle: 'Home',
          headerStyle: {
            backgroundColor: '#F7EDE2',
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

const JournalStack = createStackNavigator<JournalParamList>();

function JournalNavigator() {
  return (
    <JournalStack.Navigator>
      <JournalStack.Screen
        name="WritingScreen"
        component={WritingScreen}
        options={{ 
          headerTitle: 'Journal',
          headerStyle: {
            backgroundColor: '#F7EDE2',
          },
        }}
      />
      <JournalStack.Screen
        name="JournalScreen"
        component={JournalScreen}
        options={{ 
          headerTitle: 'Journal Entry',
          headerStyle: {
            backgroundColor: '#F7EDE2',
          },
        }}
      />
    </JournalStack.Navigator>
  );
}

const DrawingStack = createStackNavigator<DrawingParamList>();

function DrawingNavigator() {
  return (
    <DrawingStack.Navigator>
      <DrawingStack.Screen
        name="DrawingScreen"
        component={DrawingScreen}
        options={{ 
          headerTitle: 'Drawing',
          headerStyle: {
            backgroundColor: '#F7EDE2',
          },
        }}
      />
    </DrawingStack.Navigator>
  );
}

const WebsiteStack = createStackNavigator<WebsiteParamList>();

function WebsiteNavigator() {
  return (
    <WebsiteStack.Navigator>
      <WebsiteStack.Screen
        name="WebsiteScreen"
        component={WebsiteScreen}
        options={{ 
          headerTitle: 'Website',
          headerStyle: {
            backgroundColor: '#F7EDE2',
          },
        }}
      />
    </WebsiteStack.Navigator>
  );
}
