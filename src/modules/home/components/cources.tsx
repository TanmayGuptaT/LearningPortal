import { TouchableOpacity, View } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { windowHeight, windowWidth } from "../../../utils/utils"
import { TextComponent } from "../../../components/common"

const Courses=({color,iconName,numberOfCources,courceStatus,onPress}:any)=>{
    return(
        <View style={{width:windowWidth*0.45,alignItems:'center',marginTop:windowHeight*0.02}} >
        <TouchableOpacity onPress={onPress} style={{width:windowWidth*0.4,borderWidth:1,borderColor:'#d7d7d7',paddingVertical:windowWidth*0.03,paddingHorizontal:windowWidth*0.02,borderRadius:20}} >
            <View style={{backgroundColor:color,padding:windowWidth*0.025,borderRadius:50}} >
           <MaterialIcons name={iconName} size={25} color='#ffffff' />
           </View>
           <TextComponent title={numberOfCources} fontSize={18} color={'#000000'} />
           <TextComponent title={courceStatus} fontSize={16} color={'grey'} />
        </TouchableOpacity>
        </View>
    )
}

export default Courses