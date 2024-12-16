import { FlatList, View } from "react-native"
import OngoingComponent from "../components/ongoingComponent"
import { CoursesData } from "../../../data/data"
import { windowHeight, windowWidth } from "../../../utils/utils"
import { CommonHeader } from "../../../components/common"
import { useNavigation, useRoute } from "@react-navigation/native"

const Courses=()=>{

    const route:any=useRoute()

    const navigation=useNavigation<any>()

    // console.log('route ',route)

    return(
        <View style={{width:windowWidth,alignItems:'center'}} >
            <CommonHeader onPress={()=>{navigation.goBack()}} title={route?.params?.title} fontSize={20} color={'#ffffff'} textAlign={'center'} />
            <View style={{height:windowHeight*0.9}} >
            <FlatList data={CoursesData} showsVerticalScrollIndicator={false} keyExtractor={(item:any)=>item.id} renderItem={({item,index})=>{
            return(
                <View>
                 {
                 route?.params?.title==='Completed Courses'&&index<5
                 ?
                <OngoingComponent onPress={()=>{navigation.navigate('classes')}} image={item.image} title={item.title} progress={item.progress} time={item.time} marginRight={0} />
                :
                route?.params?.title==='Courses inprogress'&&index>4
                ?
                <OngoingComponent onPress={()=>{navigation.navigate('classes')}} image={item.image} title={item.title} progress={item.progress} time={item.time} marginRight={0} />
                :
                route?.params?.title==='All Courses'
                ?
                <OngoingComponent onPress={()=>{navigation.navigate('classes')}} image={item.image} title={item.title} progress={item.progress} time={item.time} marginRight={0} />
                :
                null
                // <OngoingComponent onPress={()=>{navigation.navigate('classes')}} image={item.image} title={item.title} progress={item.progress} time={item.time} marginRight={0} />     
            }
                </View>
            )
        }}
        />
            </View>
        </View>
    )
}

export default Courses