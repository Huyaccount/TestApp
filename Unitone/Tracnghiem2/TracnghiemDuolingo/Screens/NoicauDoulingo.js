import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import { COLORS, SIZES } from '../Constants/theme'
import data from '../Data/QuestionData'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tracnghiemdoulingo = ({navigation}) => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showktraButton, setShowktraButton] = useState(true)
    const [showNextButtonErrow, setShowNextButtonErrow] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)       
    const validateAnswer = () => {
        let correct_option = allQuestions[currentQuestionIndex].correct_option;
        setCorrectOption(null);
        setIsOptionsDisabled(true);
        if(abc == correct_option){
            // Set Score
            setScore(score+1)
            // Show Next Button
            setShowNextButton(true)
            setShowktraButton(false);
        }
        else{
            setShowNextButtonErrow(true)
            setShowktraButton(false);
        }
        
        
    }
    let abc ='';
    let dem = 0;
    const ktradulieu =(ktra) =>
    {
        dem++;
        abc = abc + String(ktra)
    }
    const buttonktrakkk = () =>
    {
        if(showktraButton)
        {
        return(
        
        <TouchableOpacity
                onPress={()=>validateAnswer()}
                style={{
                 width: '60%', backgroundColor: COLORS.success+'0', padding: 10, borderRadius:50, backgroundColor:'red'
                }}>
                    <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Next</Text>
        </TouchableOpacity>
        )}
        else {return null}
            }
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
            setShowNextButtonErrow(false);
            setShowktraButton(true);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
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
        setShowktraButton(true);
                Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const renderQuestion = () => {
        return (
            <View style={{
                marginVertical: 10
            }}>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: COLORS.white, fontSize: 18, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <Text style={{
                    color: COLORS.white,
                    fontSize: 30
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between'
            }}>
                {
                    
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <View>
                        
                        <TouchableOpacity 
                        onPress={()=> ktradulieu(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            backgroundColor:COLORS.accent+'30',
                            height: 60, borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginHorizontal:10,
                            marginVertical:10,
                        }}
                        >
                            <Text style={{fontSize: 20, color: COLORS.white}}>{option}</Text>

                            {/* Show Check Or Cross Icon based on correct answer*/}
                

                        </TouchableOpacity>
                        </View>
                    ))
                }
            </View>
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
                 width: '60%', backgroundColor: COLORS.success+'0', padding: 10, borderRadius:50
                }}>
                    <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Next</Text>
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
                 width: '60%', backgroundColor: COLORS.error+'0', padding: 10, borderRadius:50
                }}>
                    <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Next</Text>
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
                    backgroundColor: COLORS.accent
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }


    return(
       <SafeAreaView style={{
           flex: 1
       }}>
           <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
           <View style={{
               flex: 1,
               paddingVertical: 40,
               paddingHorizontal: 16,
               backgroundColor: COLORS.background,
               position:'relative'
           }}>

               {/* ProgressBar */}
               { renderProgressBar() }

               {/* Question */}
               {renderQuestion()}
                <View style={{height:'10%', width:'100%'}}></View>
               {/* Options */}
               {renderOptions()}
            
               

               {/* Next Button */}
               {renderNextButton()}

               {renderNextButtonErrow()}
               {/* Score Modal */}
               {buttonktrakkk()}
               <Text>{abc}</Text>
               <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                    <View style={{backgroundColor:COLORS.primary,paddingHorizontal:'3%',flexDirection:'row',justifyContent:'space-between'}}>
                     <TouchableOpacity onPress={()=> navigation.navigate('Root')} > 
                    <Image style={{
                        height:45,
                        width:45,
                    }}
                           source={require('../Assets/Images/Home.png')}
                    ></Image>
                    </TouchableOpacity >  
                    <TouchableOpacity onPress={()=> navigation.navigate('Modal')}>
                    <Image style={{
                        height:45,
                        width:45,
                    }}
                           source={require('../Assets/Images/Setting.png')}
                    ></Image>
                    </TouchableOpacity>
                    </View>
                   <View style={{
                       flex: 1,
                       backgroundColor: COLORS.primary,
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
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score> (allQuestions.length/2) ? COLORS.success : COLORS.error
                               }}>{score}</Text>
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
                           onPress={() => navigation.navigate('Game')}
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
               </Modal>

               {/* Background Image */}
               <Image
                source={require('../Assets/Images/DottedBG.png')}
                style={{
                    width: '100%',
                    height: 130,
                    zIndex: -1,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    opacity: 0.5
                }}
                resizeMode={'contain'}
                />

           </View>
       </SafeAreaView>
)
}

export default Tracnghiemdoulingo