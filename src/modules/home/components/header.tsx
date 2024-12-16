import { Text, TouchableOpacity, View } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { windowHeight, windowWidth } from "../../../utils/utils"
import { colors } from "../../../utils/colors"
import { ImageComponent, TextComponent } from "../../../components/common"
import { LoginLogo } from "../../../utils/images"


const Header=({onPress}:any)=>{
    return(
    <View style={{width:windowWidth,height:windowHeight*0.16,backgroundColor:colors.primaryColor,borderBottomEndRadius:30,borderBottomStartRadius:30,}} >
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',paddingTop:windowHeight*0.02}} >
        <View style={{flexDirection:'row',height:windowHeight*0.06,marginLeft:windowWidth*0.02}} >
        <ImageComponent heightComponent={0} dimentionImage={windowHeight*0.06} margin={0} widthComponent={windowHeight*0.06} align={'flex-start'} image={LoginLogo} borderRadius={200} />
        <Text style={{color:'#ffffff',fontSize:18,marginLeft:windowWidth*0.04}} >Education Portal</Text>
        </View>
        <TouchableOpacity onPress={onPress} style={{backgroundColor:'#088F8F',padding:windowWidth*0.015,borderRadius:10,marginRight:windowWidth*0.04}} >
        <MaterialIcons name='notifications' size={20} color={'#ffffff'} />
        </TouchableOpacity>
     </View>
     <TextComponent title={'Hii, Tanmay'} fontSize={20} color={'#d3303a'} textAlign={'center'} />
     </View>
    )
}

export default Header