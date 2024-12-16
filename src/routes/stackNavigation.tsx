import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../modules/auth/screens/login"
import TabNavigation from "./TabNavigation"
import Courses from "../modules/courses/screens/Courses"
import CourseAssets from "../modules/courses/screens/courseAssets"
import NotesList from "../modules/courses/screens/NotesList"
import Notes from "../modules/courses/screens/Notes"
import Classes from "../modules/courses/screens/Classes"
import Tutorial from "../modules/courses/screens/Tutorial"
import Assignment from "../modules/courses/screens/Assignment"
import MyProfile from "../modules/profile/screens/myProfile"
import RaiseQuery from "../modules/profile/screens/RaiseQuery"
import Notification from "../modules/home/screens/notifications"

const Stack=createNativeStackNavigator()

export type Props={
    Login:undefined,
    TabNavigation:undefined,
    Courses:{title:string},
    CourseAssets:undefined,
    NotesList:undefined,
    Notes:undefined,
    Classes:{index:number},
    Tutorial:undefined,
    Assignment:undefined,
    MyProfile:undefined,
    RaiseQuery:undefined,
    Notification:undefined
}

const StackNavigation:React.FC<Props>=()=>{
    return(
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="login" >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="tab" component={TabNavigation} />
        <Stack.Screen name="courses" component={Courses} />
        <Stack.Screen name="courseAssets" component={CourseAssets} />
        <Stack.Screen name='notesList' component={NotesList} />
        <Stack.Screen name='notes' component={Notes} />
        <Stack.Screen name='classes' component={Classes} />
        <Stack.Screen name='tutorial' component={Tutorial} />
        <Stack.Screen name='assignment' component={Assignment} />
        <Stack.Screen name="myProfile" component={MyProfile} />
        <Stack.Screen name="raiseQuery" component={RaiseQuery} />
        <Stack.Screen name="notification" component={Notification} />
    </Stack.Navigator>
    )
} 

export default StackNavigation