import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
const Sys_modal = ({message, visiable, onHide}) => {
  return (
    <Modal visible={visiable} transparent={true}>
        <View style={{
            flex:1,
            height:50,
            backgroundColor:'rgba(00,00,00,.5)',
            justifyContent:'center',
            alignItems:'center',
            padding:30
        }}>
            <View style={{ 
                width:'100%',
                padding:20,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'white',
                borderRadius:15,
            }}>
                {/*Headers*/}
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{
                    fontSize:30,
                    fontWeight:'bold'
                }}>
                    Alert
                </Text>
                </View>
                {/*body*/ }
                <View style={{padding:20}}>
                    <Text>
                        {message}
                    </Text>
                </View>
                {/*footer */}
                <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center'}
                        
            }   onPress={onHide}
            >
                    <LinearGradient style={{
                        width:'80%',
                        height:40,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:20,
                    }}
                    colors={['#67ABEE','#AC7CE6']}>
                    <Text style={{fontSize:20, fontWeight:'600', color:'white'}}>
                        Close
                    </Text>
                
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

export default Sys_modal