import { Image, Text, TouchableOpacity,View,TextInput } from "react-native"
import { buttonComponent } from "../style/style"
import { inputComponent } from "../style/style"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { windowHeight, windowWidth } from "../utils/utils"
import { colors } from "../utils/colors"

const CustomButton=({title,backColor,color,img,elevation,onPress}:any)=>{
    return(
        <TouchableOpacity onPress={()=>{onPress()}} style={[buttonComponent.mainComponent,{backgroundColor:backColor,elevation:elevation}]} >
            {
            img
            ?
            <Image source={img} style={buttonComponent.imageStyle} />
            :
            null
            }
            <Text style={[buttonComponent.textStyle,{color:color}]} >{title}</Text>
        </TouchableOpacity>
    )
}

const ImageComponent=({heightComponent,dimentionImage,margin,align,widthComponent,image,borderRadius,objectFit}:any)=>{
    return(
        <View style={{width:widthComponent,height:heightComponent,alignItems:align}} >
            <Image source={image} style={{width:dimentionImage,height:dimentionImage,marginVertical:margin,borderRadius:borderRadius,objectFit:objectFit}} />
        </View>
    )
}

const Input=({placeholder,title,value,onChange,editable}:any)=>{
    return(
        <View style={inputComponent.mainComponent} >
        <Text style={inputComponent.titleHeading} >{title}</Text>
        <View style={inputComponent.inputComponent} >
            <TextInput placeholder={placeholder} value={value} onChangeText={(text)=>{onChange(text)}} editable={editable} />
        </View>
        </View>
    )
}

const TextComponent=({title,fontSize,color,textAlign,marginTop,width,marginLeft,marginBottom}:any)=>{
    return(
        <View>
        <Text style={{fontSize:fontSize,color:color,textAlign:textAlign,marginTop:marginTop,width:width,marginLeft:marginLeft,marginBottom:marginBottom}} >{title}</Text>
        </View>
    )
}

const MyCourcesDetails=({iconName,color,tutorials,next}:any)=>{
    return(
        <View style={{flexDirection:'row'}} >
            <View style={{width:windowWidth*0.06}} >
            <MaterialIcons name={iconName} size={18} color={color} />
            </View>
            <Text style={{fontSize:12}} >{tutorials} {next}</Text>
        </View>
    )
}

const CommonHeader=({title,fontSize,color,onPress}:any)=>{
    return(
        <View style={{width:windowWidth,height:windowHeight*0.1,backgroundColor:colors.primaryColor,borderBottomLeftRadius:20,borderBottomRightRadius:20,justifyContent:'center'}} >
          <TouchableOpacity onPress={onPress} style={{marginLeft:windowWidth*0.05}} >
            <MaterialIcons name="arrow-back-ios" size={20} color={color} />
          </TouchableOpacity>
          <View style={{position:'absolute',width:windowWidth,alignItems:'center'}} >
          <Text style={{fontSize:fontSize,color:color}} >{title}</Text>
          </View>
        </View>
    )
}

const ButtonListing=({key,title,onPress}:any)=>{
    return(
        <TouchableOpacity key={key} onPress={onPress} style={{width:windowWidth*0.9,borderWidth:1,borderColor:'#d7d7d7',flexDirection:'row',paddingHorizontal:windowWidth*0.02,paddingVertical:windowHeight*0.02,justifyContent:'space-between',borderRadius:10,marginVertical:windowHeight*0.02}} >
            <Text style={{fontSize:16}} >{title}</Text>
            <MaterialIcons name="arrow-back-ios" style={{transform:[{rotate:'180deg'}]}} size={20} />
        </TouchableOpacity>
    )
}

export {CustomButton,ImageComponent,Input,TextComponent,MyCourcesDetails,CommonHeader,ButtonListing}