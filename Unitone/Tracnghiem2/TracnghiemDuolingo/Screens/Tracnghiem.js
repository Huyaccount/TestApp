import React, { useState } from 'react'
import { View, Text,  TouchableOpacity, Modal, Animated, ScrollView, Image} from 'react-native'
import { COLORS} from '../Constants/theme'
import data from '../Data/Data2';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const TracnghiemAAAAAA = ({navigation}) => {
    let ListOne = '100%';
    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false)
    const [showNextButtonErrow, setShowNextButtonErrow] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    //Handle
    const [score1, setScore1] = useState(0)
    const [bug,Setbug] = useState(true);
    const [ktra,setktra] = useState(true);
    const [AA,SetAA] = useState('');
    const [BB,SetBB] = useState('');
    const [CC,SetCC] = useState('');
    const [DD,SetDD] = useState('');
    const [EE,SetEE] = useState('');
    const [AAA,SetAAA] = useState('');
    const [BBB,SetBBB] = useState('');
    const [CCC,SetCCC] = useState('');
    const [DDD,SetDDD] = useState('');
    const [EEE,SetEEE] = useState('');
    const [correctAA, SetcorrectAA] = useState('');
    const [correctBB, SetcorrectBB] = useState('');
    const [correctCC, SetcorrectCC] = useState('');
    const [correctDD, SetcorrectDD] = useState('');
    const [correctEE, SetcorrectEE] = useState('');
    const buttonKtra =() =>
    {
        if(ktra)
        {
        return(
            <View >
            <TouchableOpacity 
            onPress={()=>{handleKtra(), handleNext()}}
            style={{height:60,width:130, backgroundColor:'green', borderRadius:20, margin:20, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'white', fontSize:20}}>Nộp</Text>
            </TouchableOpacity>
            </View>
        )}else return null;
    }
    const handleKtra =() =>
    {
        if (bug)
        {
        let correct_option0 = allQuestions[0]['correct_option'];
        let correct_option1 = allQuestions[1]['correct_option'];
        let correct_option2 = allQuestions[2]['correct_option'];
        let correct_option3 = allQuestions[3]['correct_option'];
        let correct_option4 = allQuestions[4]['correct_option'];
        SetcorrectAA(correct_option0);
        SetcorrectBB(correct_option1);
        SetcorrectCC(correct_option2);
        SetcorrectDD(correct_option3);
        SetcorrectEE(correct_option4);  
        SetAAA(AA);
        SetBBB(BB);
        SetCCC(CC);
        SetDDD(DD);
        SetEEE(EE); 
        if(correct_option0 == AAA)
          {setScore1(score1+1);}   
        if(correct_option1 == BBB)
          {setScore1(score1+1);}   
        if(correct_option2 == CCC)
          {setScore1(score1+1);}   
        if(correct_option3 == DDD)
          {setScore1(score1+1); }  
        if(correct_option4 == EEE)
          {setScore1(score1+1);}  
        Setbug(false);
        } 
    }
    const validateAnswer = (SetArray,selectedOption) => {
        if (SetArray == 0)
        {
        SetAA(selectedOption)
        };
        if (SetArray == 1)
        {
        SetBB(selectedOption);
        }
        if (SetArray == 2)
        {
        SetCC(selectedOption);
        }
        if (SetArray == 3)
        {
        SetDD(selectedOption);
        }
        if (SetArray == 4)
        SetEE(selectedOption);
    }   
    const handleNext = () => {
        if (bug)
        {
            setTimeout(() => {
                setShowScoreModal(true)
            }, 1000);
            Setbug(false)
        }
    }
    const tat =()=>{
        setShowScoreModal(false)
    }
    const restartQuiz = () => {
        setShowScoreModal(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        setShowNextButtonErrow(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const renderQuestion = () => {
        return (
            <View style={{
                alignItems:'center',
                marginVertical: 10
            }}>
                <Text> {allQuestions[0]['correct_option']}</Text>
                <Image source={require('../Assets/Images/SCR.png')} style={{resizeMode:'center'}}>
                </Image>
            </View>
        )
    }
    const renderOptions = () => {
        let a = 0;
        let b = 1;
        let c = 2;
        let d = 3;
        let e = 4;
            return (
                <ScrollView>
                <View style = {{flexDirection:'row',justifyContent:'space-between', padding:5}}>
                    <View style={{
                                height: 50, 
                                width:60,
                                borderWidth:1,
                                borderRadius:20,
                                borderColor:'black',
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10}}>
                                    <Text style={{fontSize:20}}>1</Text>
                    </View>
                    {
                        allQuestions[a]?.options.map(option => (
                            <TouchableOpacity 
                            onPress={()=> validateAnswer(a,option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3, 
                                borderColor: option == AA ? (option==correctAA
                                    ? COLORS.success +'80':(option == AAA ? COLORS.error +'60' : COLORS.secondary+'20' ))  
                                : option==correctAA
                                ? COLORS.success +'80'
                                : COLORS.secondary+'20',
                                backgroundColor:  option == AA ? (option==correctAA
                                    ? COLORS.success +'40':(option == AAA ? COLORS.error +'30' : COLORS.secondary+'50' ))
                                : option==correctAA
                                ? COLORS.success +'40'
                                : COLORS.secondary+'20',
                                height: 50, 
                                width:50,
                                flexDirection:'row',
                                borderRadius: 20,
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10
                            }}
                            >
                                <Text style={{fontSize: 20, color: 'black'}}>{option}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style = {{flexDirection:'row',justifyContent:'space-between', padding:5}}>
                <View style={{
                                height: 50, 
                                width:60,
                                borderWidth:1,
                                borderRadius:20,
                                borderColor:'black',
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10}}>
                                    <Text style={{fontSize:20}}>2</Text>
                    </View>
                    {
                        allQuestions[b]?.options.map(option => (
                            <TouchableOpacity 
                            onPress={()=> validateAnswer(b,option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3, 
                                borderColor: option == BB ? (option==correctBB
                                    ? COLORS.success +'80':(option == BBB ? COLORS.error +'60' : COLORS.secondary+'20' ))  
                                : option==correctBB
                                ? COLORS.success +'80'
                                : COLORS.secondary+'20',
                                backgroundColor:  option == BB ? (option==correctBB
                                    ? COLORS.success +'40':(option == BBB ? COLORS.error +'30' : COLORS.secondary+'50' ))  
                                : option==correctBB
                                ? COLORS.success +'40'
                                : COLORS.secondary+'20',
                                height: 50, 
                                width:50,
                                flexDirection:'row',
                                borderRadius: 20,
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10
                            }}
                            >
                                <Text style={{fontSize: 20, color: 'black'}}>{option}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style = {{flexDirection:'row',justifyContent:'space-between', padding:5}}>
                <View style={{
                                height: 50, 
                                width:60,
                                borderWidth:1,
                                borderRadius:20,
                                borderColor:'black',
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10}}>
                                    <Text style={{fontSize:20}}>3</Text>
                    </View>
                    {
                        allQuestions[c]?.options.map(option => (
                            <TouchableOpacity 
                            onPress={()=> validateAnswer(c,option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3, 
                                borderColor: option == CC ? (option==correctCC
                                ? COLORS.success +'80':(option == CCC ? COLORS.error +'60' : COLORS.secondary+'20' ))
                                : option==correctCC
                                ? COLORS.success +'80'
                                : COLORS.secondary+'20',
                                backgroundColor:  option == CC ? (option==correctCC
                                ? COLORS.success +'40': (option == CCC ? COLORS.error +'30' : COLORS.secondary+'50'))                         
                                : COLORS.secondary+'20',
                                height: 50, 
                                width:50,
                                flexDirection:'row',
                                borderRadius: 20,
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10
                            }}
                            >
                                <Text style={{fontSize: 20, color: 'black'}}>{option}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style = {{flexDirection:'row',justifyContent:'space-between', padding:5}}>
                <View style={{
                                height: 50, 
                                width:60,
                                borderWidth:1,
                                borderRadius:20,
                                borderColor:'black',
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10}}>
                                    <Text style={{fontSize:20}}>4</Text>
                    </View>
                    {
                        allQuestions[d]?.options.map(option => (
                            <TouchableOpacity 
                            onPress={()=> validateAnswer(d,option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3, 
                                borderColor: option == DD ? (option==correctDD
                                    ? COLORS.success +'80':(option == DDD ? COLORS.error +'60' : COLORS.secondary+'20' ))  
                                : option==correctDD
                                ? COLORS.success +'80'
                                : COLORS.secondary+'20',
                                backgroundColor:  option == DD ? (option==correctDD
                                    ? COLORS.success +'40':(option == DDD ? COLORS.error +'30' : COLORS.secondary+'50' ))  
                                : option==correctDD
                                ? COLORS.success +'40'
                                : COLORS.secondary+'20',
                                height: 50, 
                                width:50,
                                flexDirection:'row',
                                borderRadius: 20,
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10
                            }}
                            >
                                <Text style={{fontSize: 20, color: 'black'}}>{option}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style = {{flexDirection:'row',justifyContent:'space-between', padding:5}}>
                <View style={{
                                height: 50, 
                                width:60,
                                borderWidth:1,
                                borderRadius:20,
                                borderColor:'black',
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10}}>
                                    <Text style={{fontSize:20}}>5</Text>
                    </View>
                    {
                        allQuestions[e]?.options.map(option => (
                            <TouchableOpacity 
                            onPress={()=> validateAnswer(e,option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3, 
                                borderColor: option == EE ? (option==correctEE
                                    ? COLORS.success +'80':(option == EEE ? COLORS.error +'60' : COLORS.secondary+'20' ))  
                                : option==correctEE
                                ? COLORS.success +'80'
                                : COLORS.secondary+'20',
                                backgroundColor:  option == EE ? (option==correctEE
                                    ? COLORS.success +'40':(option == EEE ? COLORS.error +'30' : COLORS.secondary+'50' ))  
                                : option==correctEE
                                ? COLORS.success +'40'
                                : COLORS.secondary+'20',
                                height: 50, 
                                width:50,
                                flexDirection:'row',
                                borderRadius: 20,
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10
                            }}
                            >
                                <Text style={{fontSize: 20, color: 'black'}}>{option}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={{width:'100%',alignItems:'center', justifyContent:'center'}}>
                {buttonKtra()}
                </View>
                </ScrollView>
            )
            }
    const renderNextButton = () => {
        if(showNextButton){
            return (             
                <View 
                    animationType="slide"
                    style={{
                    marginTop:10,
                    alignItems:'center',
                    flex:1,
                    borderRadius:20,
                    borderWidth:2,
                    borderColor: COLORS.success ,
                    backgroundColor:COLORS.success +'20' }}>
                <TouchableOpacity
                onPress={handleNext}
                style={{
                 width: '60%', backgroundColor: COLORS.success, padding: 10, borderRadius:50, margin:10
                }}>
                    <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>Next</Text>
                </TouchableOpacity>
                <View 
            style={{marginTop:5, width:'100%', height:'50%', borderRadius:20, padding:10}}  
            >
                <Text style={{color:COLORS.success, fontSize:20}}>{allQuestions[currentQuestionIndex]?.note}</Text>
            </View>
                </View>
            )
            }else{
            return null
        }
    }

    const renderNextButtonErrow = () => {
        if(showNextButtonErrow){
            return (             
                <View 
                    animationType="slide"
                    style={{
                    marginTop:10,
                    alignItems:'center',
                    flex:1,
                    borderRadius:20,
                    borderWidth:2,
                    borderColor: COLORS.error ,
                    backgroundColor:COLORS.error +'20' }}>
                <TouchableOpacity
                onPress={handleNext}
                style={{
                 width: '60%', backgroundColor: COLORS.success+'0', padding: 10, borderRadius:50
                }}>
                    <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>Next</Text>
                </TouchableOpacity>
                <View 
            style={{marginTop:20, width:'100%', height:'50%', borderRadius:20, padding:10}}  
            >
                <Text style={{color:COLORS.success}}>{allQuestions[currentQuestionIndex]?.note}</Text>
            </View>
                </View>
            )
            }else{
            return null
        }
    }
    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: 'green'
                },{
                    width: progressAnim
                }]}>
                </Animated.View>
            </View>
        )
    }
    return(
        <View
        style={{height:'100%',width:'100%', backgroundColor:'white'}}
        >
           <View style={{
               flex: 1,
               paddingVertical: 40,
               paddingHorizontal: 16,
               
               position:'relative'
           }}>
                <View style={{paddingBottom:10}}>
                    <View style={{marginTop:5, flexDirection:'row', justifyContent:'space-between'}}>
                        <TouchableOpacity style={{padding:5, backgroundColor:'#E6E7E9', width:45, borderRadius:10}} onPress={() => navigation.goBack()}>
                            <Icon name='backward' size={30}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}} onPress={() => navigation.navigate('Root')}>
                            <Icon name="home" size={40}></Icon>
                        </TouchableOpacity>
                    </View>
            </View>
               {/* ProgressBar */}
               { renderProgressBar() }

               {/* Question */}
               {renderQuestion()}

               {/* Options */}
               {renderOptions()}
               {/* Next Button */}
               {renderNextButton()}
               {renderNextButtonErrow()}
               
               {/* Score Modal */}

               <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                    <View
                        style={{height:'100%',width:'100%', backgroundColor:'rgba(00,00,00,.7)'}}>
                    
                   <View style={{
                       flex: 1,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: COLORS.white,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score1> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score1> (allQuestions.length/2) ? COLORS.success : COLORS.error
                               }}>{score1}</Text>
                                <Text style={{
                                    fontSize: 20, color: COLORS.black
                                }}>/ { allQuestions.length }</Text>
                           </View>
                           {/* Retry Quiz button */}
                           <TouchableOpacity
                           onPress={restartQuiz}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Retry Quiz</Text>
                           </TouchableOpacity>

                       </View>

                       <TouchableOpacity
                           onPress={tat}
                           style={{
                                marginTop:'10%',
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Contuniue</Text>
                           </TouchableOpacity>
                   </View>
                   </View>
               </Modal>
           </View>
           </View>     
) 
}
export default TracnghiemAAAAAA