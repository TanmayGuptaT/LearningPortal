import { ScrollView, Text, View } from "react-native"
import { Input } from "../../../components/common"
import { useState } from "react"
import { CustomButton } from "../../../components/common"
import { windowHeight, windowWidth } from "../../../utils/utils"
import { ImageComponent } from "../../../components/common"
import { colors } from "../../../utils/colors"
import { LoginLogo } from "../../../utils/images"
import { useNavigation } from "@react-navigation/native"
import CustomAlert from "../../courses/components/customAlert"

const Login=()=>{

  const navigation=useNavigation<any>()

  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const [alertVisible, setAlertVisible] = useState(false);

  const CheckSubmit=()=>{
    if(username==='Tanmay@'&&password==='Tanmay@123'){
        // navigation.navigate('tab')
        navigation.reset({
          index: 0,
          routes: [{ name: 'tab' }],
        });
    }
    else{
      setAlertVisible(true);
    }
  }
  
    return(
        <ScrollView>
        <View style={{alignItems:'center',backgroundColor:colors.primaryColor}} >
          <ImageComponent heightComponent={windowHeight*0.3} dimentionImage={windowHeight*0.2} margin={windowHeight*0.05} align="center" widthComponent={windowWidth} image={LoginLogo} borderRadius={200} />
          <View style={{width:windowWidth,alignItems:'center',height:windowHeight*0.7,borderTopStartRadius:30,borderTopEndRadius:30,backgroundColor:colors.secondaryColor,paddingTop:windowHeight*0.02}} >
          <Input placeholder={'User Name'} title={'Username'} value={username} onChange={(n:any)=>{setUserName(n)}} />
          <Input placeholder={'Password'} title={'Password'} value={password} onChange={(n:any)=>{setPassword(n)}} />
          <CustomButton title={'Login'} backColor={'orange'} color={'#ffffff'} img={null} elevation={0} onPress={CheckSubmit} />
          <Text>OR</Text>
          <CustomButton title={'Login With Google'} backColor={'#ffffff'} color={'#000000'} img={require('../../../assets/Logos/googleLogo.jpg')} elevation={8} onPress={()=>{navigation.reset({
      index: 0,
      routes: [{ name: 'tab' }],
    })}} />
          </View>
          <CustomAlert visible={alertVisible} onClose={() => setAlertVisible(false)} message={'Invalid credentials'} />
        </View>
        </ScrollView>
    )
}

export default Login