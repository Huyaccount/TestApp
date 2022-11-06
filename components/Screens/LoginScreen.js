import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState , useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import Sys_modal from '../Components/Sys_modal';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
//Database
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";

const openDatabase =()=> {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }
  const db = SQLite.openDatabase("adabc.db");
  return db;
}

const db = openDatabase();


const LoginScreen = () => {
    
    const navigation = useNavigation();
    const [username,SetUsername] = useState('')
    const [password,SetPassword] = useState('')
    const [showModal,SetShowModal ] =useState(false)
    const [ShowErrowMessage, SetShowErowMessage] = useState ('');
    // handle database
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [name1, setName1] = useState('');
    const [age1, setAge1] = useState('');
    useEffect(() => {
        createTable();
        getData();
    }, []);
    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Account"
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, User TEXT, Pass TEXT);"
            )
        })
    }
    const getData = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT User, Pass FROM Account",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                          var userName1 = results.rows.item(0).User;
                          var userAge1 = results.rows.item(0).Pass;
                          setName1(userName1);
                          setAge1(userAge1);
                        }
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }
    const setData =() => {
                 db.transaction(async (tx) => {
                     tx.executeSql(
                        "INSERT INTO Account (User, Pass) VALUES (?,?)",
                        [username , password]
                    )
                })
        }
    //
    const onHideModal =() =>
    {
        SetShowModal(false);
    }
  
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
        setAge(value);
        SetPassword(value);
    }
    const onChangeUsername =(value) =>
    {
        setName(value);
        SetUsername(value);
    }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      {/*Headers*/}
      <Sys_modal visiable={showModal} message={ShowErrowMessage} onHide={onHideModal}/>
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
                    onSubmitEditing={() => {
                        setData();
                      }}
                    style={{}} placeholder={'Type your username'}>

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
                    onSubmitEditing={() => {
                        setData();
                      }}
                    style={{}} placeholder={'Type your password'}>

                    </TextInput>
                </View>
            </View>
            
        </View>
        {/*Fogot pass*/}
        <TouchableOpacity style={{alignItems:'center', marginTop:10}}>
                <Text >
                    Fogot password?
                </Text>
        </TouchableOpacity>
        {/*Login Button */}
        <View style={{justifyContent:'center', alignItems:'center', marginVertical:40,
    }}> 
            <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center'}}
                onPress={setData}
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
                <TouchableOpacity style={{
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
                <TouchableOpacity style={{
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
                <TouchableOpacity style={{
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
            <TouchableOpacity style={{
                paddingTop:20,
            }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'black',
                }}>
                    Sign Up
                </Text>
                <Text>{name1}////{age1}</Text>
            </TouchableOpacity>

      </View>
    </View>
  )
}

export default LoginScreen