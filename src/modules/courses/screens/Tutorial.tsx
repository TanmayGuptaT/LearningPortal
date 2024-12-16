import { View } from "react-native"
import VideoPlayComponent from "../components/videoPlayComponent"
import { ButtonListing, TextComponent } from "../../../components/common"
import { Text } from "react-native"
import { windowHeight, windowWidth } from "../../../utils/utils"
import { useNavigation, useRoute } from "@react-navigation/native"

const Tutorial=()=>{

    const route=useRoute<any>()

    const navigation=useNavigation<any>()

    console.log('route ',route)

    return(
        <View>
            <VideoPlayComponent index={route?.params?.index} />
            <TextComponent title={'Class 1'} fontSize={18} color={'#000000'} marginLeft={windowWidth*0.05} marginTop={windowHeight*0.01} />
            <TextComponent title={'JavaScript Variables'} fontSize={16} color={'#000000'} marginLeft={windowWidth*0.05} marginTop={windowHeight*0.01} />
            <TextComponent title={'Posted Date : 15-12-2024'} fontSize={14} color={'#000000'} marginLeft={windowWidth*0.05} marginTop={windowHeight*0.01} />
            <View style={{width:windowWidth,alignItems:'center'}} >
            <ButtonListing title={'Notes'} onPress={()=>{navigation.navigate('notesList')}} />
            <ButtonListing title={'Assignment'} onPress={()=>{navigation.navigate('assignment')}}  />
            </View>
        </View>
    )
}

export default Tutorial