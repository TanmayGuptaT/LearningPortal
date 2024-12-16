import { Text, TouchableOpacity, View } from "react-native"
import { ImageComponent, TextComponent } from "../../../components/common"
import { windowHeight, windowWidth } from "../../../utils/utils"

const ClassesComponent=({image,title,date,description,duration,onPress}:any)=>{
    return(
     <TouchableOpacity onPress={onPress} style={{flexDirection:'row',width:windowWidth*0.9,alignSelf:'center',marginVertical:windowHeight*0.02,borderWidth:1,borderColor:'#d7d7d7',paddingHorizontal:windowWidth*0.02,paddingVertical:windowHeight*0.02,borderRadius:10}} >
        <ImageComponent heightComponent={windowHeight*0.14} dimentionImage={windowHeight*0.14} margin={0} align={'flex-start'} widthComponent={windowHeight*0.14} image={image} borderRadius={10} objectFit={'fill'} />
        <View style={{marginLeft:windowWidth*0.02,width:windowWidth*0.7}} >
        <TextComponent title={title} fontSize={18} color={'#000000'} />
        <TextComponent title={description} width={windowWidth*0.55} fontSize={17} color={'#000000'} />
        <TextComponent title={duration} fontSize={17} color={'#000000'} />
        <TextComponent title={date} fontSize={17} color={'#000000'} />
        </View>
     </TouchableOpacity>
    )
}

export default ClassesComponent