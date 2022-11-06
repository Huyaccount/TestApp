import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScree';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {Provider} from 'react-redux';
import {store} from '../Redux/Reduxer/Store'

{/*ListUnit*/}
import Cources from '../Newfolder/screens/Cources';
{/*Unit1*/}
import Cources2 from '../Newfolder/screensTwo/Cources2';
{/*Vocabulary*/}
import TuvungUnit1 from '../Unitone/Tracnghiemmm/ScreenNewVocabulary/Index';
import TracnghiemPassOne from '../Unitone/Tracnghiemmm/PassOne/Screens/Tracnghiem';
import Tracnghiem from '../Unitone/Tracnghiemmm/Screens/Tracnghiem';
//

{/*Duolingo*/}
import Tracnghiemdoulingo from '../Unitone/Tracnghiem2/TracnghiemDuolingo/Screens/NoicauDoulingo';
{/*WriteDuolingoUnit1*/}
import WriteDuolingoUnit1 from '../Unitone/Writeduo/Tracnghiemmm/Screens/Writeduolingounti1';
{/*Test*/}
import GameUnit1Memory from '../Unitone/GameUnit1/Screens/Index'
import LoginScreen from '../components/Screens/LoginScreen';
import AccountScreens from '../components/Screens/AccountScreens';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import Login1 from '../Test/test';
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();
    {/*initialRouteName={'Login'}*/}

const abc = async () =>
{
  return(
     await AsyncStorage.getItem('UserName') 
  )   
}
function RootNavigator() {
  return (
    <Provider store={store}>
    <Stack.Navigator initialRouteName={abc != null ? "Login" : "Root"}  screenOptions={{headerShown: false} } >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Unit1" component={Cources2} />
      <Stack.Screen name="VocabularyTN" component={Tracnghiem} />
      <Stack.Screen name="Vocabularynext2" component={Tracnghiemdoulingo} />
      <Stack.Screen name="Game" component={GameUnit1Memory} />
      <Stack.Screen name="Account" component={AccountScreens} />
      <Stack.Screen name="TuvungUnit1" component={TuvungUnit1} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
    </Provider>
  );
}
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={Cources}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Danh sach Unit',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={({ navigation }: RootTabScreenProps<'TabTwo'>) => ({
          title: 'tabTwo',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabThree"
        component={AccountScreens}
        options={{
          title: 'Tab',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
