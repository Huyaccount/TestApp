import React from 'react';
import {Text,TouchableOpacity, View,Image} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {  useSelector} from 'react-redux';

export default class CourseList1 extends React.Component{
    render(){
        const infor = useSelector((state) =>state.inforUnitOne);
        const {img,title, bg, onPress,percent, lessons} = this.props
        return(
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection:"row",
                    backgroundColor:bg,
                    padding:20,
                    marginHorizontal:20,
                    borderRadius:20,
                    alignItems:"center",
                    marginTop:10
                }}
            >
                    <Image
                        source={img}
                        style={{width:40,height:40}}
                    />

                    <View>
                         <Text style={{
                             color:"#345c74",
                             fontSize:13,
                             paddingHorizontal:20,
                             width:170
                         }}>{title}</Text>
                         <Text style={{
                             color:"#f58084",
                             
                             fontSize:12,
                             paddingHorizontal:20
                         }}>
                             {lessons}
                         </Text>
                    </View>
                    <Text style={{
                        color:"#345c74",
                       
                        fontSize:13,
                        paddingLeft:10,
                        paddingRight:10
                    }}>
                        {percent}
                    </Text>
                    <ProgressCircle
                        percent={30}
                        radius={17}
                        borderWidth={1.5}
                        color="f580084"
                        shadowColor="#FFF"
                        bgColor="#FFF"
                    >
                        <Image
                            source={require('../images/ae.png')}
                        />
                    </ProgressCircle>

            </TouchableOpacity>
        )
    }
}