import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Styledanhsachunit from './Style'
import ComponentsOfUnit1 from '../../ComponentsOfUnit/Screens/Index'
const DanhsachUnit = ({navigation}) => {
  return (
    <ScrollView style={{flex:1}}>
    
    <View style={{
        alignItems:'center',
        backgroundColor:'white',
        width:'100%',
        height:'100%',
    }}>
    <TouchableOpacity style={{flexDirection:'column', height:'10%' ,width:"80%",alignItems:'center',marginBottom:'12%'} }
     onPress={() =>{
      navigation.navigate('Unit1')
     }
     }>
      <View 
        style={Styledanhsachunit.StyleunitDanhsach}
      >
        <Text 
            style={{fontSize:30}}
        >
            Unit 1
        </Text>
      </View>
      <View style={{marginTop:"3%",backgroundColor:'#e1e1e1',alignItems:'center',height:'25%',width:'100%',borderRadius:10,justifyContent:'center'}}>
        <Text style={{opacity:1.6, color:'black'}}> Ten bai hoc</Text>
      </View>
    </TouchableOpacity>
    {/*Unit2*/}
    <TouchableOpacity style={{flexDirection:'column', height:'10%' ,width:"80%",alignItems:'center',marginBottom:'12%'}}>
      <View 
        style={Styledanhsachunit.StyleunitDanhsach}
      >
        <Text 
            style={{fontSize:30}}
        >
            Unit 1
        </Text>
      </View>
      <View style={{marginTop:"3%",backgroundColor:'#e1e1e1',alignItems:'center',height:'25%',width:'100%',borderRadius:10,justifyContent:'center'}}>
        <Text style={{opacity:1.6, color:'black'}}> Ten bai hoc</Text>
      </View>
    </TouchableOpacity>
    {/*Unit3*/}
    <TouchableOpacity style={{flexDirection:'column', height:'10%' ,width:"80%",alignItems:'center',marginBottom:'12%'}}>
      <View 
        style={Styledanhsachunit.StyleunitDanhsach}
      >
        <Text 
            style={{fontSize:30}}
        >
            Unit 1
        </Text>
      </View>
      <View style={{marginTop:"3%",backgroundColor:'#e1e1e1',alignItems:'center',height:'25%',width:'100%',borderRadius:10,justifyContent:'center'}}>
        <Text style={{opacity:1.6, color:'black'}}> Ten bai hoc</Text>
      </View>
    </TouchableOpacity>
    {/*Unit4*/}
    <TouchableOpacity style={{flexDirection:'column', height:'10%' ,width:"80%",alignItems:'center',marginBottom:'12%'}}>
      <View 
        style={Styledanhsachunit.StyleunitDanhsach}
      >
        <Text 
            style={{fontSize:30}}
        >
            Unit 1
        </Text>
      </View>
      <View style={{marginTop:"3%",backgroundColor:'#e1e1e1',alignItems:'center',height:'25%',width:'100%',borderRadius:10,justifyContent:'center'}}>
        <Text style={{opacity:1.6, color:'black'}}> Ten bai hoc</Text>
      </View>
    </TouchableOpacity>
    {/*Unit5*/}
    <TouchableOpacity style={{flexDirection:'column', height:'10%' ,width:"80%",alignItems:'center',marginBottom:'12%'}}>
      <View 
        style={Styledanhsachunit.StyleunitDanhsach}
      >
        <Text 
            style={{fontSize:30}}
        >
            Unit 1
        </Text>
      </View>
      <View style={{marginTop:"3%",backgroundColor:'#e1e1e1',alignItems:'center',height:'25%',width:'100%',borderRadius:10,justifyContent:'center'}}>
        <Text style={{opacity:1.6, color:'black'}}> Ten bai hoc</Text>
      </View>
    </TouchableOpacity>
    {/*Unit6*/}
    <TouchableOpacity style={{flexDirection:'column', height:'10%' ,width:"80%",alignItems:'center',marginBottom:'12%'}}>
      <View 
        style={Styledanhsachunit.StyleunitDanhsach}
      >
        <Text 
            style={{fontSize:30}}
        >
            Unit 1
        </Text>
      </View>
      <View style={{marginTop:"3%",backgroundColor:'#e1e1e1',alignItems:'center',height:'25%',width:'100%',borderRadius:10,justifyContent:'center'}}>
        <Text style={{opacity:1.6, color:'black'}}> Ten bai hoc</Text>
      </View>
    </TouchableOpacity>
    {/*Unit7*/}
    <TouchableOpacity style={{flexDirection:'column', height:'10%' ,width:"80%",alignItems:'center',marginBottom:'12%'}}>
      <View 
        style={Styledanhsachunit.StyleunitDanhsach}
      >
        <Text 
            style={{fontSize:30}}
        >
            Unit 1
        </Text>
      </View>
      <View style={{marginTop:"2%",backgroundColor:'#e1e1e1',alignItems:'center',height:'25%',width:'100%',borderRadius:10,justifyContent:'center'}}>
        <Text style={{opacity:1.6, color:'black'}}> Ten bai hoc</Text>
      </View>
    </TouchableOpacity>
    {/*Unit8*/}
    <TouchableOpacity style={{flexDirection:'column', height:'8%' ,width:"80%",alignItems:'center',marginBottom:'12%'}}>
      <View 
        style={Styledanhsachunit.StyleunitDanhsach}
      >
        <Text 
            style={{fontSize:30}}
        >
            Unit 1
        </Text>
      </View>
      <View style={{marginTop:"2%",backgroundColor:'#e1e1e1',alignItems:'center',height:'25%',width:'100%',borderRadius:10,justifyContent:'center'}}>
        <Text style={{opacity:1.6, color:'black'}}> Ten bai hoc</Text>
      </View>
    </TouchableOpacity>
    {/*Unit9*/}
    <TouchableOpacity style={{flexDirection:'column', height:'8%' ,width:"80%",alignItems:'center',marginBottom:'12%'}}>
      <View 
        style={Styledanhsachunit.StyleunitDanhsach}
      >
        <Text 
            style={{fontSize:30}}
        >
            Unit 1
        </Text>
      </View>
      <View style={{marginTop:"2%",backgroundColor:'#e1e1e1',alignItems:'center',height:'25%',width:'100%',borderRadius:10,justifyContent:'center'}}>
        <Text style={{opacity:1.6, color:'black'}}> Ten bai hoc</Text>
      </View>
    </TouchableOpacity>
    {/*Unit10*/}
    <TouchableOpacity style={{flexDirection:'column', height:'8%' ,width:"80%",alignItems:'center',marginBottom:'12%'}}>
      <View 
        style={Styledanhsachunit.StyleunitDanhsach}
      >
        <Text 
            style={{fontSize:30}}
        >
            Unit 1
        </Text>
      </View>
      <View style={{marginTop:"2%",backgroundColor:'#e1e1e1',alignItems:'center',height:'25%',width:'100%',borderRadius:10,justifyContent:'center'}}>
        <Text style={{opacity:1.6, color:'black'}}> Ten bai hoc</Text>
      </View>
    </TouchableOpacity>
    {/*Unit11*/}
    <TouchableOpacity style={{flexDirection:'column', height:'8%' ,width:"80%",alignItems:'center',marginBottom:'12%'}}>
      <View 
        style={Styledanhsachunit.StyleunitDanhsach}
      >
        <Text 
            style={{fontSize:30}}
        >
            Unit 1
        </Text>
      </View>
      <View style={{marginTop:"2%",backgroundColor:'#d4d0cf',alignItems:'center',height:'25%',width:'100%',borderRadius:10,justifyContent:'center'}}>
        <Text style={{opacity:1.6, color:'black'}}> Ten bai hoc</Text>
      </View>
    </TouchableOpacity>
    </View>
    
    </ScrollView>
  )
}

export default DanhsachUnit