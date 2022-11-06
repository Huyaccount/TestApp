import { StyleSheet , ScrollView} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, Pressable } from 'react-native';
import LinkingConfiguration from '../navigation/LinkingConfiguration';
import {

  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from './Index';
import Navigation from '../navigation';
import Tracnghiem from '../Tracnghiemmm/Screens/Tracnghiem';

let exercises = [
  {
    title: 'Diet Recommendation',
    image: require('../constants/Images/Exercise1.png'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of diet recommendation',
    duration: '5-20 MIN Course',
  },
  {
    title: 'Diet Recommendation',
    image: require('../constants/Images/Exercise1.png'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of diet recommendation',
    duration: '5-20 MIN Course',
  },
  {
    title: 'Diet Recommendation',
    image: require('../constants/Images/Exercise1.png'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of diet recommendation',
    duration: '5-20 MIN Course',
  },
  {
    title: 'Diet Recommendation',
    image: require('../constants/Images/Exercise1.png'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of diet recommendation',
    duration: '5-20 MIN Course',
  },
  {
    title: 'Diet Recommendation',
    image: require('../constants/Images/Exercise1.png'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of diet recommendation',
    duration: '5-20 MIN Course',
  },{
    title: 'Diet Recommendation',
    image: require('../constants/Images/Exercise1.png'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of diet recommendation',
    duration: '5-20 MIN Course',
  },
  {
    title: 'Diet Recommendation',
    image: require('../constants/Images/Exercise1.png'),
    Text:'unit 1',
    subTitle:
      'Live happier and healthier by learning the fundamentals of diet recommendation',
    duration: '5-20 MIN Course',
  },

];
const ExerciseHomeScreen = () => {
  const ExerciseItem = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 60,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,

        }}>
        <Image
          source={require('../constants/Images/Exercise1.png')}
          style={{
            width: '100%',
            resizeMode: 'cover',
            flex: 1,
          }}
        />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          UNIT1
        </Text>
      </TouchableOpacity>
    );
        }
  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <StatusBar
        backgroundColor={COLORS.accent + '30'}
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          width: '100%',
          height:150,
          padding: 30,
          backgroundColor: COLORS.accent + '20',
          position: 'relative',
          borderBottomStartRadius:70,
          borderBottomEndRadius:70,
        }}>
        <Image
          source={require('../constants/Images/Exercise1.png')}
          style={{
            width:50,
            height:59,
            position: 'absolute',
            top: 60,
            left: -50,
          }}
        />
        

        <Text style={{fontSize: 30, lineHeight: 40}}>
          Good Morning Rushikesh
        </Text>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.accent + '55',
            position: 'absolute',
            right: -30,
            bottom: 50,
          }}></View>
      </View>
      <ScrollView>
      <FlatList
        data={exercises}
        style={{
          paddingHorizontal: 20,
          marginTop:10,
        }}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({item}) => <ExerciseItem/>}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseHomeScreen;
