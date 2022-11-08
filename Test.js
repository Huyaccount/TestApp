import { supabase } from './Supabase/initSupabase'
import { View, Text } from 'react-native'
import React from 'react'

const Nhap = async ()=>{
    let { data: XepHang, error } = await supabase
    .from('XepHang')
    .select('*')
    return(
        XepHang
    )
}
const Testindex = () => {  
    const data = Nhap().catch(error);
  return (
    <View>
      <Text>{data[0].id}</Text>
    </View>
  )
}
export default Testindex