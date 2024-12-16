import { FlatList, Text, View } from "react-native"
import { CommonHeader, CustomButton, Input, TextComponent } from "../../../components/common"
import { useState } from "react"
import { windowHeight, windowWidth } from "../../../utils/utils"
import { colors } from "../../../utils/colors"
import { useDispatch, useSelector } from "react-redux"
import { setQueries } from "../redux/profileSlice"
import CustomAlert from "../../courses/components/customAlert"
import { useNavigation } from "@react-navigation/native"


const RaiseQuery=()=>{

    const navigation=useNavigation()

    const [query,setQuery]=useState('')
    const [alertVisible, setAlertVisible] = useState(false);
    const [message,setMessage]=useState<any>(null)


    const dispatch=useDispatch()

    const selector=useSelector((state:any)=>state.profile)

    console.log('selecter ',selector)

    const addQuery=()=>{
        if(query){
            dispatch(setQueries(query))
            setAlertVisible(true);
          setMessage("Query Raised Successfully")
        }
        else{
            setAlertVisible(true);
          setMessage("Please Write Something then Submit")
        }
    }

    return(
        <View>
            <CommonHeader onPress={()=>{navigation.goBack()}} title={'Raise a Query'} fontSize={20} color={'#ffffff'} />
            <View style={{marginVertical:windowHeight*0.05}} >
            <Input placeholder={'Raise a Query'} value={query} onChange={(n:any)=>setQuery(n)} />
            <CustomButton title={'Raise a Query'} backColor={colors.primaryColor} color={'#ffffff'} onPress={()=>{addQuery()}} />
            </View>
            <View style={{height:windowHeight*0.4,width:windowWidth*0.8,alignSelf:'center'}} >
            <TextComponent title={'Queries'} fontSize={18} color={'#000000'} textAlign={'center'} marginBottom={windowHeight*0.01} />
            <FlatList 
            data={selector?.queries} 
            keyExtractor={(item:any,index:any)=>index} renderItem={({item})=>{
                // console.log('items ',item)
                return(
                    <View style={{width:windowWidth*0.8,borderWidth:1,borderColor:'#d7d7d7',paddingHorizontal:windowWidth*0.02,paddingVertical:windowHeight*0.015,borderRadius:10,marginBottom:windowHeight*0.01}} >
                        <Text style={{fontSize:16}} >{item}</Text>
                    </View>
                )
            }} />
            </View>
            <CustomAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        message={message}
        />
        </View>
    )
}

export default RaiseQuery