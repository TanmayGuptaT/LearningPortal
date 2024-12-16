import { FlatList, View } from "react-native"
import { CommonHeader, TextComponent } from "../../../components/common"
import { NotesData } from "../CourseData/CourseData"
import { windowHeight, windowWidth } from "../../../utils/utils"
import { useNavigation, useRoute } from "@react-navigation/native"

const Notes=()=>{

    const route=useRoute<any>()

    const navigation=useNavigation<any>()

    console.log('route ',route)

    const categories = ["Javascript", "Typescript", "Java", "Python", "kotlin"];
  const selectedCategory = categories[route?.params?.index];

  const filteredData = NotesData.filter((note) => note.title === selectedCategory);

    return(
     <View style={{width:windowWidth,alignItems:'center'}} >
        <CommonHeader onPress={()=>{navigation.goBack()}} title={'Notes'} fontSize={20} color={'#ffffff'} />
        <TextComponent title={route?.params?.date} fontSize={18} color={'gray'} textAlign={'center'} marginTop={windowHeight*0.01} />
        <View style={{width:windowWidth*0.9}} >
        <TextComponent title={categories[route?.params?.index]} fontSize={20} color={'#000000'} />
        <FlatList data={filteredData} showsVerticalScrollIndicator={false} style={{marginTop:windowHeight*0.02}} keyExtractor={(item:any)=>item.id} renderItem={({item})=>{
            return(
                <View>
                <TextComponent title={item.sentence} fontSize={16} color={'grey'} />
                </View>
            )
        }}
        />
        </View>
     </View>
    )
}

export default Notes