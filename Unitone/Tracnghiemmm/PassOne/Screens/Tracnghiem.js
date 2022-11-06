import React, { useState } from 'react'
import { View, Text,  TouchableOpacity, Modal, Animated} from 'react-native'
import { COLORS} from '../Constants/theme'
import data from '../Data/QuestionData';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch} from 'react-redux';
import { updateListone } from '../../../Redux/ReduxInforUnit/UnitOne/UpdateAction';
const TracnghiemPassOne = ({navigation}) => {
    let ListOne = '100%';
    const dispatch = useDispatch();
    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showNextButtonErrow, setShowNextButtonErrow] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    //Handle
    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
            setShowNextButton(true)
        }
        else{
        // Show Next Button
        setShowNextButtonErrow(true)
        }
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
                    <Text style={{color: 'black', fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: 'black', fontSize: 18, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <Text style={{
                    color: 'black',
                    fontSize: 20
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity 
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 3, 
                            borderColor: option==correctOption 
                            ? COLORS.success
                            : option==currentOptionSelected 
                            ? COLORS.error 
                            : COLORS.secondary+'40',
                            backgroundColor: option==correctOption 
                            ? COLORS.success +'30'
                            : option==currentOptionSelected 
                            ? COLORS.error +'30'
                            : COLORS.secondary+'20',
                            height: 60, borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginVertical: 10
                        }}
                        >
                            <Text style={{fontSize: 20, color: 'black'}}>{option}</Text>

                            {/* Show Check Or Cross Icon based on correct answer*/}
                            {
                                option==correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ): option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>            
                                ) : null
                            }

                        </TouchableOpacity>
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
                                     style={{height:'100%',width:'100%', backgroundColor:'rgba(00,00,00,.5)'}}>
                    
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
                           onPress={()=> {navigation.navigate('Vocabularynext'),dispatch(updateListone(ListOne))}}
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
export default TracnghiemPassOne