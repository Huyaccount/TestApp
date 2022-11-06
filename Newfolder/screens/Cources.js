import React, { useState ,useEffect} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal} from 'react-native';
import CourseList from './CourseList';
import {  useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
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
    const db = SQLite.openDatabase("abcd2.db");
    return db;
  }
  
  const db = openDatabase();
const Cources =() =>{

    //
    const [nm, setB] = useState();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [Number, setN] = useState('');
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
                          setN(userName1);
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
                        [nm, age]
                    );
                })
          
            
        }
        //

    const [showModal , SetShowModal] = useState(true);
    const showModala =() =>
    {
        setB(1);
        setN(1);
        SetShowModal(false)
    }
    const Modale = () =>{
        if (Number == 1)
        {
            SetShowModal(false);
        }
        if(showModal)
        {
            return(
                <Modal style={{flex:1}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <View style={{height:'50%',width:'80%', backgroundColor:'pink', borderRadius:20, justifyContent:'center', alignItems:'center'}}>
                        <Text style ={{fontSize:20}}>
                                ban co muon luu tai khoan khong
                        </Text>
                        <View style={{flexDirection:'row', }}>
                            <TouchableOpacity 
                            onPress={showModala}
                            style={{height:50,width:50,borderRadius:10,backgroundColor:'red' , margin:20, justifyContent:'center', alignItems:'center'}}>
                                <Text>
                                    No
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={()=> {showModala() && setData()}}
                            style={{height:50,width:50,borderRadius:10,backgroundColor:'green', margin:20, justifyContent:'center', alignItems:'center'}}>
                                <Text>
                                    Yes
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                </Modal>
            )
        }else return null;
    }
        const navigation = useNavigation();
        const infor = useSelector((state) =>state.inforUnitOne);
        return(
            <View
                style={{width:"100%",height:"100%",backgroundColor:'white'}}
            >
                <Modale></Modale>
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20,
                    borderRadius:30,
                }}>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate("Unit1")}
                        style={{ width:30
                        }}
                    >
                        <Image
                            source={require('../images/spinning-arrows.png')}
                            style={{marginLeft:20,width:30,height:30, marginTop:10}}
                        />
                    </TouchableOpacity>
                    <View style={{
                        paddingHorizontal:10,
                        paddingVertical:3,
                        borderRadius:10,
                        marginTop:30,
                        marginLeft:"70%"
                    }}> 
                            <Image
                                source={require('../images/balloon.png')}
                                style={{height:40,width:40}}
                            />
                    </View>
                </View>
                <View style={{backgroundColor:'#F0F8FF',borderTopStartRadius:200,borderTopEndRadius:200, marginTop:15}}>
                <Text style={{
                    color:"black",
                    fontSize:40,
                    width:200,
                    alignSelf:"center",
                    textAlign:"center",
                    paddingVertical:10,
                    }}>
                    Unit Cources {Number}
                </Text>
                </View>

                    <ScrollView >          
                    <View style={{paddingVertical:15, backgroundColor:'#F0F8FF'}}>
                            <CourseList
                                onPress={()=> navigation.navigate("TuvungUnit1")}
                                img={require('../images/ae.png')}
                                title="Vocabulary" 
                                bg="#fdddf3"
                                lessons="20 lessons"
                                percent={infor.ListOne}
                            />
                             {
                                infor.ListOne != '100%' ? (
                                    <CourseList
                                        img={require('../images/ae.png')}
                                        title="UI Motion Design in After Effects"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={infor.ListTwo}
                                />
                                ): infor.ListOne == '100%' ? (
                                    <CourseList
                                        img={require('../images/ae.png')}
                                        title="Sketch shortcuts and tricks"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={infor.ListTwo}
                                    />        
                                ) : null
                            }
                            {
                                infor.ListOne != '100%' ? (
                                    <CourseList
                                        img={require('../images/ae.png')}
                                        title="UI Motion Design in After Effects"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={infor.ListTwo}
                                />
                                ): infor.ListOne == '100%' ? (
                                    <CourseList
                                        img={require('../images/ae.png')}
                                        title="Sketch shortcuts and tricks"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={infor.ListTwo}
                                    />        
                                ) : null
                            }
                            {
                                infor.ListOne != '100%' ? (
                                    <CourseList
                                        img={require('../images/ae.png')}
                                        title="UI Motion Design in After Effects"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={infor.ListTwo}
                                />
                                ): infor.ListOne == '100%' ? (
                                    <CourseList
                                        img={require('../images/ae.png')}
                                        title="Sketch shortcuts and tricks"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={infor.ListTwo}
                                    />        
                                ) : null
                            }
                            {
                                infor.ListOne != '100%' ? (
                                    <CourseList
                                        img={require('../images/ae.png')}
                                        title="UI Motion Design in After Effects"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={infor.ListTwo}
                                />
                                ): infor.ListOne == '100%' ? (
                                    <CourseList
                                        img={require('../images/ae.png')}
                                        title="Sketch shortcuts and tricks"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={infor.ListTwo}
                                    />        
                                ) : null
                            }
                            {
                                infor.ListOne != '100%' ? (
                                    <CourseList
                                        img={require('../images/ae.png')}
                                        title="UI Motion Design in After Effects"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={infor.ListTwo}
                                />
                                ): infor.ListOne == '100%' ? (
                                    <CourseList
                                        img={require('../images/ae.png')}
                                        title="Sketch shortcuts and tricks"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={infor.ListTwo}
                                    />        
                                ) : null
                            }
                    </View>
                    </ScrollView> 
                    
            </View>
        )
    }
export default Cources