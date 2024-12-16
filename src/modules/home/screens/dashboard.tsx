import { FlatList, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native"
import Header from "../components/header"
import Courses from "../components/cources"
import { Data, CoursesData } from "../../../data/data"
import { windowHeight, windowWidth } from "../../../utils/utils"
import MyCources from "../components/myCources"
import { useNavigation } from "@react-navigation/native"

const Dashboard=()=>{

    const navigation=useNavigation<any>()

    return(
     <View style={{backgroundColor:'#ffffff',flex:1}} >
        <Header onPress={()=>{navigation.navigate('notification')}} />
        <ScrollView showsVerticalScrollIndicator={false} style={{height:windowHeight*0.84}} >
        <View style={{width:windowWidth,alignItems:'center'}} >
        <FlatList data={Data} keyExtractor={(item:any)=>item.id} numColumns={2} renderItem={({item,index})=>{
            return(
                <Courses color={item.color} iconName={item.iconName} numberOfCources={item.numberOfCources} courceStatus={item.coureStatus} onPress={()=>{index!==3&&navigation.navigate('courses',{title:item.coureStatus})}} />
            )
        }} />
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate('courses',{title:'All Courses'})}} >
        <Text style={{marginTop:windowHeight*0.03,textAlign:'right',marginRight:windowWidth*0.1,color:'purple'}}>View All Courses</Text>
        </TouchableOpacity>
        <FlatList data={CoursesData} horizontal showsHorizontalScrollIndicator={false} keyExtractor={(item:any)=>item.id} renderItem={({item,index})=>{
            return(
              <View>
              {
              index<3
              &&
              <MyCources onPress={()=>{navigation.navigate('classes')}} image={item.image} title={item.title} progress={item.progress} time={item.time} marginRight={index===2?windowWidth*0.05:0} />
              }
              </View>
            )
        }}
        />
        </ScrollView>
     </View>
    )
}

export default Dashboard