import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView} from 'react-native';
import CourseList from './CourseList';
import {  useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const Cources =() =>{
        const navigation = useNavigation();
        const infor = useSelector((state) =>state.inforUnitOne);
        return(
            <View
                style={{width:"100%",height:"100%",backgroundColor:'white'}}
            >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20,
                    borderRadius:30,
                }}>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate("Account")}
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
                                onPress={()=> navigation.navigate("A1")}
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