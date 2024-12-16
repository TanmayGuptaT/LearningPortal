import { FlatList, View } from "react-native"
import { CommonHeader } from "../../../components/common"
import ClassesComponent from "../components/classesComponent"
import { ClassesData } from "../CourseData/CourseData"
import { windowHeight } from "../../../utils/utils"
import { useNavigation } from "@react-navigation/native"

const Classes=()=>{

    const navigation=useNavigation<any>()

    return(
        <View>
           <CommonHeader onPress={()=>{navigation.goBack()}} title={'Classes'} fontSize={20} color={'#ffffff'} />
           <View style={{height:windowHeight*0.9}} >
           <FlatList data={ClassesData} showsVerticalScrollIndicator={false} keyExtractor={(item:any)=>item.id} renderItem={({item,index})=>{
            console.log('item ',item)
            return(
                <ClassesComponent onPress={()=>{navigation.navigate('tutorial',{index:index})}}  image={item.poster} title={item.title} date={item.date} duration={item.duration} description={item.description} />
            )
           }}
           />
           </View>
        </View>
    )
}

export default Classes