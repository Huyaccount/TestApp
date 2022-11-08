import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import Sys_modal from '../Components/Sys_modal';
import Sys_modal2 from '../Components/Sys_modal2';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
const LoginScreen = () => {

    const navigation = useNavigation();
    const [username,SetUsername] = useState('');
    const [password,SetPassword] = useState('');
    const [showModal,SetShowModal] =useState(false);
    const [showModal2,SetShowModal2] =useState(false);
    const [ShowErrowMessage, SetShowErowMessage] = useState ('');
    const ShowModalTBB =() =>
    {
        SetShowModal2(true);
        SetShowErowMessage('Chuc nang nay dang bao chi');
    };
    const onHideModal2 =() =>
    {
        SetShowModal2(false);
    };
    const onHideModal =() =>
    {
        SetShowModal(false);
    };
    const ClickButtonLogin =() =>
    {
        if (username.length == 0 || password.length == 0)
        {
            SetShowErowMessage('Please input login information.')
            SetShowModal(true);
            return;
        }
        axios({
            url:'https://thaoquan.herokuapp.com/api/user/login',
            method: 'POST' ,
            data: {
                username:username,
                password:password,
            },
        }).then(result=>{
            const currentUser = result.data.data.user;
            console.log(result.data);
            AsyncStorage.setItem('UserName',currentUser.username);
            AsyncStorage.setItem('Id',currentUser._id);
            AsyncStorage.setItem('Role',currentUser.role);
            AsyncStorage.setItem('Pass',password);
            
            //To home Screen
            navigation.navigate('Root')
        }).catch(error => {
            SetShowErowMessage(error.response.data.error)
            SetShowModal(true)
        })
    }
    const onChangePassword =(value) =>
    {
        SetPassword(value);
    }
    const onChangeUsername =(value) =>
    {
        SetUsername(value);
    }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      {/*Headers*/}
      <Sys_modal visiable={showModal} message={ShowErrowMessage} onHide={onHideModal}/>
      <Sys_modal2 visiable={showModal2} message={ShowErrowMessage} onHide={onHideModal2}/>
      <View style={{
        flex:1.5, 
        justifyContent:'center', alignItems:'center',
        paddingTop:30,

        }}>
            <Text style={{
                marginTop:20,
                fontSize:30,
                fontWeight:'bold',
            }}>
                Login
            </Text>
      </View>
      {/*Body*/}
      <View style={{
        flex:6
       }}>
        {/*username*/}
        <View style={{
            marginTop:20,
            marginHorizontal:30,
            marginVertical:20,
       }}>
            <Text style={{
                fontSize:20,
                fontWeight:'bold',
                color:'black',
            }}>
                Username
            </Text>
            <View style={{flexDirection:'row',
                borderBottomColor:'gray',
                borderBottomWidth:1,
            }}>
                <View style={{padding:10}}>
                    <Icon name='user' size={25}></Icon>
                </View>
                <View style={{width:'90%', padding:10}}>
                    <TextInput 
                    value={username}
                    onChangeText={onChangeUsername}
                    placeholder={'Type your username'}>

                    </TextInput>
                </View>
            </View>
            
        </View>
        {/*Password*/}

        <View style={{
            marginHorizontal:30,
       }}>
            <Text style={{
                fontSize:20,
                fontWeight:'bold',
                color:'black',
            }}>
                Password
            </Text>
            <View style={{flexDirection:'row',
                borderBottomColor:'gray',
                borderBottomWidth:1,
            }}>
                <View style={{padding:10}}>
                    <Icon name='lock' size={25}></Icon>
                </View>
                <View style={{width:'90%', padding:10}}>
                    <TextInput 
                    value={password}
                    secureTextEntry={true}
                    onChangeText={onChangePassword}
                    placeholder={'Type your password'}>

                    </TextInput>
                </View>
            </View>
            
        </View>
        {/*Fogot pass*/}
        <TouchableOpacity
        onPress={ShowModalTBB} 
        style={{alignItems:'center', marginTop:10}}>
                <Text >
                    Fogot password?
                </Text>
        </TouchableOpacity>
        {/*Login Button */}
        <View style={{justifyContent:'center', alignItems:'center', marginVertical:40,
    }}> 
            <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center'}}
                onPress={ClickButtonLogin}
            >
            <LinearGradient style={{
                width:'60%',
                height:40,
                justifyContent:'center',
                alignItems:'center',
                borderRadius:20,
            }}
            colors={['#67ABEE','#AC7CE6']}>               
                    <Text style={{fontSize:20, fontWeight:'600', color:'white'}}>
                        LOGIN
                    </Text>
            </LinearGradient>
            </TouchableOpacity>
        </View>
       {/* */    }
       <View style={{
        marginTop:40,
        justifyContent:'center', alignItems:'center',
       }}>
            <Text style={{
                fontSize:20,
                fontWeight:'bold',
                color:'black',
            }}>
                Or sign up using
            </Text>
            <View style={{
                flexDirection:'row'
            }}>
                {/*Face*/}
                <TouchableOpacity 
                onPress={ShowModalTBB}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius:50,
                    padding: 10,
                    backgroundColor:'#3b5998',
                    justifyContent:'center',
                    alignItems:'center',
                    margin:5,

                }}>
                    <Icon name='facebook-f' size={20} color={'white'}></Icon>
                </TouchableOpacity>
                {/*Twitch*/}
                <TouchableOpacity 
                onPress={ShowModalTBB}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius:50,
                    padding: 10,
                    backgroundColor:'#1dcaff',
                    justifyContent:'center',
                    alignItems:'center',
                    margin:5,
                }}>
                    <Icon name='twitter' size={20} color={'white'}></Icon>
                </TouchableOpacity>
                {/*Google*/}
                <TouchableOpacity 
                onPress={ShowModalTBB}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius:50,
                    padding: 10,
                    backgroundColor:'#EA4335',
                    justifyContent:'center',
                    alignItems:'center',
                    margin:5,

                }}>
                    <Icon name='google' size={20} color={'white'}></Icon>
                </TouchableOpacity>
            </View>
       </View>

      </View>
      {/*Bottom*/}
      <View style={{
        flex:2.5, backgroundColor:'white',
        justifyContent:'center', alignItems:'center',
      }}>
            <Text style={{
                fontSize:20,
                fontWeight:'bold',
                color:'black',
            }}>
                Or sign up using
            </Text>
            {/*Button Sign Up*/}
            <TouchableOpacity 
            onPress={ShowModalTBB}
            style={{
                paddingTop:20,
            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'black',
                }}>
                    Sign Up
                </Text>
                <Text>onHideModal2</Text>
            </TouchableOpacity>

      </View>
    </View>
  )
}

export default LoginScreen