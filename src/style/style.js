// Components style
import { StyleSheet } from "react-native";
import { windowWidth,windowHeight } from "../utils/utils";
import { colors} from "../utils/colors";

// input component style

const inputComponent=StyleSheet.create({
    mainComponent:{width:windowWidth,alignItems:'center',marginVertical:windowHeight*0.01},
    titleHeading:{fontSize:16,width:windowWidth*0.82,marginBottom:windowHeight*0.006},
    inputComponent:{borderWidth:1,width:windowWidth*0.84,height:windowHeight*0.06,paddingHorizontal:windowWidth*0.01,borderRadius:10,borderColor:colors.borderColor}
})


// button component style

const buttonComponent=StyleSheet.create({
    mainComponent:{width:windowWidth*0.84,paddingVertical:windowWidth*0.03,borderRadius:10,justifyContent:'center',alignItems:'center',alignSelf:'center',marginVertical:windowHeight*0.05,flexDirection:'row'},
    textStyle:{fontSize:17},
    imageStyle:{width:windowWidth*0.06,height:windowWidth*0.06,marginRight:windowWidth*0.04}    
})

export {inputComponent,buttonComponent}