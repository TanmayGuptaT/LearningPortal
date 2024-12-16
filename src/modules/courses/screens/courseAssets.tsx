import { FlatList,View } from "react-native"
import { windowWidth } from "../../../utils/utils"
import { CourseAssetsData } from "../../../data/data"
import { ButtonListing, CommonHeader } from "../../../components/common"

const CourseAssets=()=>{
    return(
        <View style={{width:windowWidth,alignItems:'center'}} >
            <CommonHeader title={'CourseAssets'} fontSize={20} color={'#ffffff'} />
            <FlatList data={CourseAssetsData} keyExtractor={(item:any)=>item.id} renderItem={({item})=>{
                return(
                    <ButtonListing title={item.title} />
                )
            }}
            />
        </View>
    )
}

export default CourseAssets