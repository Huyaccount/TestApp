import { View, Text } from 'react-native'
import React, { useState , useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  const db = SQLite.openDatabase("Passss.db");
  return db;
}

const db = openDatabase();
const AccountScreens = () => {
    const [pass,setpass] = useState('');
    const [user,setU] = useState('');
    const [username,SetUsername] = useState('');
    const [userId, SetUserId] = useState('');
    const [userRole, SetUserRole] = useState('');
    const [userPass, SetUserPass] = useState('');
    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS"
                + "Account"
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, User TEXT, Pass TEXT);"
            )
        })
    }
    useEffect(() =>{
        AsyncStorage.getItem('UserName').then(result =>{
        SetUsername(result)
        });
        AsyncStorage.getItem('Id').then(result =>{
        SetUserId(result)
        });
        AsyncStorage.getItem('Role').then(result =>{
        SetUserRole(result)
        });
        AsyncStorage.getItem('Pass').then(result =>{
        SetUserPass(result)
        });
        createTable();
        getData();
    })
    const getData = () => {
        try {
            db.transaction(async (tx) => {
                tx.executeSql(
                   "INSERT INTO Account (User, Pass) VALUES (?,?)",
                   [username, userPass]
               );
           })
           db.transaction((tx) => {
            tx.executeSql(
                "SELECT User, Pass FROM Account",
                [],
                (tx, results) => {
                      var userName1 = results.rows.item(0).User;
                      var userAge1 = results.rows.item(0).Pass;
                      setU(userName1);
                      setpass(userAge1);
                }
            )
        })
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <View style={{flex:1, backgroundColor:'white', padding:30}}>
        <View style ={{
            width:'100%',
            backgroundColor:'#DFDEDC',
            padding:30,
            borderRadius:20,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Icon name='user' size={35}></Icon>
            <View style={{
                paddingLeft:15
            }}>
            <Text> {user}  , {pass}</Text>
            <Text>
                ID : {userId}
            </Text>
            <Text>
                Username : {username}
            </Text>
            <Text>
                Role : {userRole} , {userPass}
            </Text>
            </View>
        </View>

        {/* */}
        <View style={{
            marginTop:20,
            marginHorizontal:30,
            marginVertical:20,
       }}>
            <View style={{flexDirection:'row',
                borderBottomColor:'gray',
                borderBottomWidth:1,
                padding:10,
                marginBottom:15
            }}>
                <View style={{padding:10}}>
                    <Icon name='youtube' size={25}></Icon>
                </View>
                <View style={{width:'100%', padding:10}}>
                </View>
            </View>

            <View style={{flexDirection:'row',
                borderBottomColor:'gray',
                borderBottomWidth:1,
                padding:10,
                marginBottom:15
            }}>
                <View style={{padding:10}}>
                    <Icon name='user' size={25}></Icon>
                </View>
                <View style={{width:'100%', padding:10}}>
                </View>
            </View>

            <View style={{flexDirection:'row',
                borderBottomColor:'gray',
                borderBottomWidth:1,
                padding:10,
                marginBottom:15
            }}>
                <View style={{padding:10}}>
                    <Icon name='home' size={25}></Icon>
                </View>
                <View style={{width:'100%', padding:10}}>
                </View>
            </View>

            <View style={{flexDirection:'row',
                borderBottomColor:'gray',
                borderBottomWidth:1,
                padding:10,
                marginBottom:15
            }}>
                <View style={{padding:10}}>
                    <Icon name='plane' size={25}></Icon>
                </View>
                <View style={{width:'100%', padding:10}}>
                </View>
            </View>
        </View>
      <Text></Text>
    </View>)
}

export default AccountScreens