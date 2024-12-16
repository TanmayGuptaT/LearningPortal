import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
} from "react-native";
import DocumentPicker from "react-native-document-picker";
import RNFS from "react-native-fs";
import { useDispatch, useSelector } from "react-redux";
import { setFiles } from "../redux/coursesSlice";
import { CommonHeader } from "../../../components/common";
import { windowHeight, windowWidth } from "../../../utils/utils";
import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

const Assignment = () => {
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);

  const navigation=useNavigation()

  const dispatch=useDispatch()

  const selector=useSelector((state:any)=>state?.courses)

  console.log('selector ',selector)

  const requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Storage Permission",
          message: "This app needs access to your storage to save files.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Storage permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const SelectFile = async () => {
    try {
      const file: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      if (file) {
        
        await dispatch(setFiles(file))

        const base64File = await RNFS.readFile(file[0].uri, "base64");

        if (base64File) {
          
          setPdfBase64(base64File);
          console.log("File Base64: ", base64File);
        }
      }
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log("File selection canceled");
      } else {
        console.error("Error picking file: ", error);
      }
    }
  };

  const [state,setState]=useState(false)

  return (
    <View style={{ flex: 1 }}>
      <CommonHeader onPress={()=>{navigation.goBack()}} title={'Assignment'} fontSize={20} color={'#ffffff'} />
      <View style={{width:windowWidth*0.9,flexDirection:'row',justifyContent:'space-between',alignSelf:'center',marginTop:windowHeight*0.02}} >
        <TouchableOpacity onPress={()=>{setState(true)}} style={{backgroundColor:state?'orange':'#d7d7d7',width:windowWidth*0.4,padding:windowWidth*0.02,justifyContent:'center',alignItems:'center',borderRadius:10}} >
          <Text style={{fontSize:16,color:state?'#ffffff':'#000000'}} >Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setState(false)}} style={{backgroundColor:!state?'orange':'#d7d7d7',width:windowWidth*0.4,padding:windowWidth*0.02,justifyContent:'center',alignItems:'center',borderRadius:10}} >
          <Text style={{fontSize:16,color:!state?'#ffffff':'#000000'}} >View</Text>
        </TouchableOpacity>
      </View>
          {state
          ?
          <View style={{width:windowWidth,height:windowHeight*0.5,alignItems:'center',justifyContent:'center'}} >
          <TouchableOpacity onPress={SelectFile} style={{ marginBottom: 20,backgroundColor:'#3088d3',padding:windowWidth*0.03,borderRadius:10 }}>
            <Text style={{color:'#ffffff'}} >Pick and View PDF</Text>
          </TouchableOpacity>
          </View>
          :
           <WebView 
           source={{ uri:  `data:application/pdf;base64,${pdfBase64}` }} 
           style={{color:'#000000',height:windowHeight*0.4,width:windowWidth}} javaScriptEnabled={true}
        scalesPageToFit={true}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.error('WebView error: ', nativeEvent);
        }} />
}
    </View>
  );
};

export default Assignment;
