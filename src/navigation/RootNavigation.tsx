import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  HomeScreen,
  OtpScreen,
  ProfileSettingScreen,
  SignInScreen,
} from '../screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../resources';
import RegisterScreen from '../screens/SignInScreen/RegisterScreen';
import {ROUTE} from '../resources/routesName';
import PostScreen from '../screens/HomeScreen/PostScreen';
import ChatScreen from '../screens/HomeScreen/ChatScreen';

type Props = {};

const RootNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      {/* <AuthenticationStack /> */}

      <ApplicationStack />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.SIGN_IN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTE.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={ROUTE.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={ROUTE.OTP} component={OtpScreen} />
    </Stack.Navigator>
  );
};

const ApplicationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'ApplicationTab'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'ApplicationTab'} component={ApplicationTab} />
      <Stack.Screen name={ROUTE.POST} component={PostScreen} />
      <Stack.Screen name={ROUTE.CHAT} component={ChatScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTE.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const ApplicationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          zIndex: 20,
          backgroundColor: '#fff',
          borderRadius: 100,
          width: '90%',
          height: 48,
          left: '5%',
          paddingHorizontal: 10,
          marginBottom: '3%',
        },

        tabBarLabelStyle: {display: 'none'},
        tabBarActiveTintColor: COLORS.PURPLE,
      }}>
      <Tab.Screen
        name={'HomeStack'}
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Stats"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="chart-box" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NewPost"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="plus-circle" size={38} color={COLORS.PURPLE} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="bell" size={26} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileSettingScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="account-circle-outline" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
