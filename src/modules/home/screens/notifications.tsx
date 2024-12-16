import { FlatList, Image, Touchable, TouchableOpacity, View } from "react-native"
import { CommonHeader, TextComponent } from "../../../components/common"
import { NotificationData } from "../../../data/data"
import { windowHeight, windowWidth } from "../../../utils/utils"
import { useNavigation } from "@react-navigation/native"

const Notification=()=>{

    const navigation=useNavigation()

    return(
        <View>
        <CommonHeader onPress={()=>{navigation.goBack()}} title={'Notification'} fontSize={20} color={'#ffffff'} />
        <FlatList data={NotificationData} keyExtractor={(item:any)=>item.id} renderItem={({item})=>{
            return(
               <TouchableOpacity style={{flexDirection:'row',alignSelf:'center',width:windowWidth*0.9,borderWidth:1,borderColor:'#d7d7d7',borderRadius:10,padding:windowWidth*0.02,marginVertical:windowHeight*0.02}} >
                <Image source={item.img} style={{width:windowHeight*0.06,height:windowHeight*0.06,borderRadius:4,marginRight:windowWidth*0.03}} />
                <View>
                    <View style={{marginBottom:windowHeight*0.01}} >
                    <TextComponent title={item.title} fontSize={14} color={'#000000'} />
                    </View>
                    <TextComponent title={item.description} fontSize={12} color={'#000000'} />
                </View>
               </TouchableOpacity>
            )
        }}
        />
        </View>
    )
}

export default Notification