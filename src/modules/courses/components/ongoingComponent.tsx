import { TouchableOpacity, View } from "react-native"
import { ImageComponent, MyCourcesDetails, TextComponent } from "../../../components/common"
import { windowHeight, windowWidth } from "../../../utils/utils"
import { ELearning } from "../../../utils/images"
import { CourseTiming } from "../../../data/data"
import { colors } from "../../../utils/colors"

const OngoingComponent=({image,title,progress,time,marginRight,onPress}:any)=>{
    return(
     <TouchableOpacity onPress={onPress} style={{width:windowWidth*0.9,flexDirection:'row',borderWidth:1,borderColor:'#d7d7d7',padding:windowWidth*0.02,borderRadius:10,marginVertical:windowHeight*0.01}} >
        <ImageComponent heightComponent={windowHeight*0.15} dimentionImage={windowHeight*0.15} margin={0} align={'start'} widthComponent={windowHeight*0.15} image={image} borderRadius={20} />
        <View style={{marginLeft:windowWidth*0.02}} >
        <TextComponent title={title} fontSize={18} color={'#000000'} />
            {CourseTiming.map((e)=>{
                return(
            <MyCourcesDetails iconName={e.iconName} color={colors.primaryColor} tutorials={e.tutorials} next={e.nextText} />   
            )
            })}
            <TextComponent title={`${progress} Completed`} color={'purple'} fontSize={10} />
            <TextComponent textAlign={'center'} title={`Next Class Starting in ${time} min`} color={'#000000'} fontSize={14} />
            </View>
     </TouchableOpacity>
    )
}

export default OngoingComponent