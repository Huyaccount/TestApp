import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default class ProGramUnit1 extends React.Component{
    render(){
        return(
    <View style={{flex:1}}>
    <View style={{flex:1, backgroundColor:'gray'}}>
      <Text>Index 
            Index
            Index
            Index
            Index
            Index
            Index
      </Text>
    </View>
        <View style={{
            backgroundColor:'green',       
            height:'15%',      
            alignItems:'center',
            justifyContent:'center',

        }}>
            <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate("Vocabulary")}
            style={{
            backgroundColor:'pink',
            height:'60%',
            width:'70%',
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text> Ready! Let's go</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}
}