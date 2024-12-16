import { useRef, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { windowHeight, windowWidth } from "../../../utils/utils"
import Video from "react-native-video"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Slider from "@react-native-community/slider"
import { video1, video2, video3, video4 } from "../../../utils/videos"

const VideoPlayComponent=({index}:any)=>{

    const [click,setClick]=useState(false)
    const [pause,setPause]=useState(false)
    const [progress,setProgress]=useState<any>(null)
    const ref=useRef<any>()
    const format=(seconds:any)=>{
        let mins=parseInt(seconds/60)
        .toString()
        .padStart(2,'0');
        let secs=(Math.trunc(seconds)%60).toString().padStart(2,'0')
        return `${mins}:${secs}`;
    }

    return(
        <TouchableOpacity style={{height:windowHeight*0.4,width:windowWidth}} onPress={()=>{setClick(true)}} >
            <Video
            source={index%2===0?video1:index%3===0?video2:index%5===0?video3:video4}
            style={{height:windowHeight*0.4,width:windowWidth}}
            resizeMode="stretch"
            paused={pause}
            ref={ref}
            onProgress={(x)=>{
                // console.log('x ',x)
                setProgress(x)
            }}
            // ref={videoRef}
            // onBuffer={onBuffer}
            // onError={onError}
            />
            {click&&
            <TouchableOpacity style={{width:windowWidth,height:windowHeight*0.4,position:'absolute',alignItems:'center',justifyContent:'center'}} onPress={()=>{setClick(false)}} >
               <View style={{flexDirection:'row',width:windowWidth*0.7,justifyContent:'space-between'}} >
               <TouchableOpacity onPress={()=>{ref.current.seek(progress.currentTime-10)}} >
               <MaterialIcons name="forward-10" size={40} color={'#ffffff'} style={{transform:[{rotateY:'180deg'}]}} />
               </TouchableOpacity>
               {pause
               ?
               <TouchableOpacity onPress={()=>{setPause(false)}} >
               <MaterialIcons name="play-circle" size={40} color={'#ffffff'} />
               </TouchableOpacity>
               :
               <TouchableOpacity onPress={()=>{setPause(true)}} >
               <MaterialIcons name="pause-circle" size={40} color={'#ffffff'} />
               </TouchableOpacity>
                }
                <TouchableOpacity onPress={()=>{ref.current.seek(progress.currentTime+10)}} >
               <MaterialIcons name="forward-10" size={40} color={'#ffffff'} />
               </TouchableOpacity>
               </View>
               <View style={{width:windowWidth*0.8,position:'absolute',bottom:windowHeight*0.02,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
               <Text style={{color:'#ffffff'}} >{format(progress.currentTime)}</Text>
               <Slider
  style={{width: windowWidth*0.6, height: 40}}
  minimumValue={0}
  maximumValue={progress.seekableDuration}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#ffffff"
//   value={progress.currentTime}
  onValueChange={(x)=>{
    ref.current.seek(x)   
  }}
/>
               <Text style={{color:'#ffffff'}} >{format(progress.seekableDuration)}</Text>
               </View>
            </TouchableOpacity>    
            }
            </TouchableOpacity>
    )
}

export default VideoPlayComponent