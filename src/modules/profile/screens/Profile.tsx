import { View } from "react-native"
import { ButtonListing, CommonHeader, CustomButton } from "../../../components/common"
import { useNavigation } from "@react-navigation/native"
import { windowHeight } from "../../../utils/utils"

const Profile=()=>{

    const navigation=useNavigation<any>()

    return(
     <View style={{alignItems:'center'}} >
        <CommonHeader onPress={()=>{navigation.goBack()}} title={'Profile'} color={"#ffffff"} fontSize={20} />
        <View style={{marginTop:windowHeight*0.05,height:windowHeight*0.5}} >
        <ButtonListing title={'My Profile'} onPress={()=>{navigation.navigate('myProfile')}} />
        <ButtonListing title={'Queries'} onPress={()=>{navigation.navigate('raiseQuery')}} />
        </View>
        <CustomButton title={'Log out'} backColor={'orange'} color={'#ffffff'} onPress={()=>{navigation.reset({
      index: 0,
      routes: [{ name: 'login' }],
    })}} />
     </View>
    )
}

export default Profile