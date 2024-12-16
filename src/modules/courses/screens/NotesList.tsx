import { FlatList, Text, View } from "react-native"
import { ButtonListing, CommonHeader } from "../../../components/common"
import { NotesListData } from "../../../data/data"
import { useNavigation } from "@react-navigation/native"

const NotesList=()=>{

    const navigation=useNavigation<any>()

    return(
     <View style={{alignItems:'center'}} >
        <CommonHeader onPress={()=>{navigation.goBack()}} title={'Notes List'} fontSize={20} color={'#ffffff'} />
        <FlatList data={NotesListData} keyExtractor={(item:any)=>item.id} renderItem={({item,index})=>{
            return(
                <ButtonListing title={item.title} onPress={()=>{navigation.navigate('notes',{date:item.title,index:index})}} />
            )
        }} />
     </View>
    )
}

export default NotesList