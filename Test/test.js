import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,
} from 'react-native';
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
  const db = SQLite.openDatabase("abcd1.db");
  return db;
}

const db = openDatabase();


const Login1=()=> {

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
                + "Account "
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
                        [name, age]
                    );
                })
          
            
        }
    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                
            />
            <Text style={styles.text}>

            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your age'
                onChangeText={(value) => setAge(value)}
                onSubmitEditing={() => {
                  setData();
                }}
            />
            <Text> {age1}   {name1}
            </Text>
        </View>
    )
    }

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 200,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 130,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    }
})
export default Login1