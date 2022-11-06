import React  from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground} from 'react-native'
import CourseList1 from '../screensTwo/CourseList';
import Icon from 'react-native-vector-icons/FontAwesome';
import {  useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const Cources2 =( ) =>{
    const infor = useSelector((state) =>state.inforUnitOne);
    const navigation = useNavigation();
        return(
            
            <ImageBackground
                source={require('../images/19366.jpg')}
                style={{width:"100%",height:"100%", backgroundColor:'white'}}
            >
                <View style={{flex:1, padding:20}}>
                    <View style={{marginTop:20, flexDirection:'row', justifyContent:'space-between'}}>
                        <TouchableOpacity style={{padding:5, backgroundColor:'#E6E7E9', width:45, borderRadius:10}} onPress={() => navigation.goBack()}>
                            <Icon name='backward' size={30}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}} onPress={() => navigation.navigate('Root')}>
                            <Icon name="home" size={40}></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:'10%', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:30, fontWeight:'600'}}>
                            Lesson Unit Component
                        </Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20,
                    borderRadius:30,
                }}>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate("Modal")}
                        style={{
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
                    <View style={{}}>
                        
                            <CourseList1
                                onPress={()=> navigation.navigate("TuvungUnit1")}
                                img={require('../images/ae.png')}
                                title="Vocabulary" 
                                bg="#fdddf3"
                                lessons="20 lessons"
                                percent={infor.ListOne}
                            />
                            
                            {
                                infor.ListOne != '100%' ? (
                                    <CourseList1
                                        img={require('../images/ae.png')}
                                        title="UI Motion Design in After Effects"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={infor.ListTwo}
                                />
                                ): infor.ListOne == '100%' ? (
                                    <CourseList1
                                        img={require('../images/ae.png')}
                                        title="Sketch shortcuts and tricks"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={infor.ListTwo}
                                    />        
                                ) : null
                            }
                             {
                                infor.ListTwo != '100%' ? (
                                    <CourseList1
                                        img={require('../images/ae.png')}
                                        title="UI Motion Design in After Effects"
                                        bg="rgba(00,00,00,.4)"
                                        lessons="20 lessons"
                                        percent={infor.ListThree}
                                />
                                ): infor.ListTwo == '100%' ? (
                                    <CourseList1
                                        img={require('../images/ae.png')}
                                        title="UI Motion Design in After Effects"
                                        bg="#fcf2ff"
                                        lessons="20 lessons"
                                        percent={infor.ListThree}
                                    />        
                                ) : null
                            }

                            {
                                infor.ListTwo != '100%' ? (
                                    <CourseList1
                                        img={require('../images/ae.png')}
                                        title="UI Motion Design in After Effects"
                                        bg="rgba(00,00,00,.4)"
                                        lessons="20 lessons"
                                        percent={infor.ListThree}
                                />
                                ): infor.ListTwo == '100%' ? (
                                    <CourseList1
                                        img={require('../images/ae.png')}
                                        title="UI Motion Design in After Effects"
                                        bg="#fcf2ff"
                                        lessons="20 lessons"
                                        percent={infor.ListThree}
                                    />        
                                ) : null
                            }
                    </View>
                    <View  style={{marginLeft:"70%",width:40,height:40, marginTop:'20%', opacity:0.4}}>
                    <Image
                            source={require('../images/atom.png')}
                            style={{marginLeft:20,width:40,height:40, marginTop:10, }}
                        />
                    </View>
            </ImageBackground>
        )
    }
export default Cources2