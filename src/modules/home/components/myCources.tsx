import { Image, TouchableOpacity, View } from "react-native"
import { windowHeight, windowWidth } from "../../../utils/utils"
import { MyCourcesDetails, TextComponent } from "../../../components/common"
import { colors } from "../../../utils/colors"
import { CourseTiming } from "../../../data/data"

const MyCources=({image,title,progress,time,marginRight,onPress}:any)=>{
    return(
        <View style={{paddingVertical:windowHeight*0.03,marginLeft:windowWidth*0.05,marginRight:marginRight}} >
          <TouchableOpacity onPress={onPress} style={{width:windowWidth*0.64,borderRightWidth:1,borderLeftWidth:1,borderBottomWidth:1,borderColor:'#d7d7d7',alignItems:'center',borderRadius:20,paddingBottom:windowHeight*0.02}} >
            <Image source={image} style={{width:windowWidth*0.64,height:windowHeight*0.25,objectFit:'fill',marginBottom:windowHeight*0.01,borderTopRightRadius:20,borderTopLeftRadius:20}} />
            <TextComponent title={title} fontSize={18} color={'#000000'} />
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:windowHeight*0.01,width:windowWidth*0.6}} >
            <View>
            {CourseTiming.map((e)=>{
                return(
            <MyCourcesDetails iconName={e.iconName} color={colors.primaryColor} tutorials={e.tutorials} next={e.nextText} />   
            )
            })}
            </View>
            <TextComponent title={`${progress} Completed`} color={'purple'} fontSize={10} />
            </View>
            <TextComponent textAlign={'center'} title={`Next Class Starting in ${time} min`} color={'#000000'} fontSize={14} />
            </TouchableOpacity>
        </View>
    )
}

export default MyCources