import { Image, ScrollView, TouchableOpacity, View,Text, Alert } from "react-native"
import { CommonHeader, CustomButton, ImageComponent, Input } from "../../../components/common"
import { useEffect, useState } from "react"
import { windowHeight, windowWidth } from "../../../utils/utils"
import DocumentPicker from "react-native-document-picker";
import { useDispatch, useSelector } from "react-redux";
import { setFile, setUserData } from "../redux/profileSlice";
import RNFS from "react-native-fs";
import CustomAlert from "../../courses/components/customAlert";
import { useNavigation } from "@react-navigation/native";

const MyProfile=()=>{

  const navigation=useNavigation()

    const dispatch=useDispatch()

    const selector=useSelector((state:any)=>state.profile)


    const [email,setEmail]=useState(selector?.userData?.email?selector?.userData?.email:'tanmay@gmail.com')
    const [mobile,setMobile]=useState(selector?.userData?.mobile?selector?.userData?.mobile:'9876543210')
    const [f,setF]=useState<any>(null)
    const [imgtype,setImgtype]=useState(null)
    const [base64,setBase64]=useState(null)
    const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [message,setMessage]=useState<any>(null)

    const validateEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setEmailError("Invalid email format");
          return false;
        }
        setEmailError("");
        return true;
      };
    
      const validateMobile = (value: string) => {
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(value)) {
          setMobileError("Mobile number must be 10 digits");
          return false;
        }
        setMobileError("");
        return true;
      };
    
      const handleValidation = () => {
        const isEmailValid = validateEmail(email);
        const isMobileValid = validateMobile(mobile);
        setIsValid(isEmailValid && isMobileValid);
      };

    const handleSubmit = () => {
        if(isValid){
          dispatch(setUserData({email,mobile}))
          setAlertVisible(true);
          setMessage("Profile Updated Successfully")
        } else {
          setIsValid(false);
          setAlertVisible(true); 
          setMessage("Invalid data. Please correct the highlighted fields.")
        }
      };

    const pickImage=async()=>{
      try {
        const file=await DocumentPicker.pick({
            type:DocumentPicker.types.images
        })
        if(file){
            console.log('fill ',file)
            setF(file)
            await dispatch(setFile(file))
        }
        else{
            console.log('else')
        }
      } catch (error) {
         console.log('error ',error)        
      }
    }

    const Base64=async()=>{
       try {
        const base64File:any = await RNFS.readFile(selector?.file?.[0].uri, "base64");
        if(base64File){
            setBase64(base64File)
            setImgtype(selector?.file?.[0]?.type)
        }   
        else{
            console.log('else')
        }
    } catch (error) {
        console.log('error ',error)
       }
    }

    useEffect(()=>{
      Base64()
    },[f])

    useEffect(() => {
        handleValidation();
      }, [email, mobile]);

    console.log('selector ',selector)

    return(
        <ScrollView>
        <View style={{alignItems:'center'}} >
         <CommonHeader onPress={()=>{navigation.goBack()}} title={'My Profile'} fontSize={20} color={'#ffffff'} />
         <TouchableOpacity onPress={()=>{pickImage()}} > 
         <Image source={base64?{uri:`data:${imgtype};base64,${base64}`}:require('../../../assets/Logos/user.png')} style={{width:windowWidth*0.25,height:windowWidth*0.25,borderRadius:100,marginVertical:windowHeight*0.05}} />
         </TouchableOpacity>
         <Input placeholder={'Name'} title={'Name'} value={'Tanmay'} editable={false} />
         <Input placeholder={'Username'} title={'Username'} value={'Tanmay@'} editable={false} />
         <Input placeholder={'Email'} title={'Email'} value={email} onChange={(n:any)=>{setEmail(n)}} />
         {emailError 
         ? 
         <Text style={{color: "red",fontSize: 12,marginBottom: 10,width:windowWidth*0.8}}>{emailError}</Text> 
         : 
         null
         }
         <Input placeholder={'Mobile'} title={'Mobile'} value={mobile} onChange={(n:any)=>{setMobile(n)}} />
         {mobileError 
         ? 
         <Text style={{color: "red",fontSize: 12,marginBottom: 10,width:windowWidth*0.8}}>{mobileError}</Text> 
         : 
         null
         }
         <CustomButton title={'Submit'} backColor={'orange'} color={'#ffffff'} onPress={handleSubmit} />
        </View>
        <CustomAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        message={message}
      />

        </ScrollView>
    )
}

export default MyProfile