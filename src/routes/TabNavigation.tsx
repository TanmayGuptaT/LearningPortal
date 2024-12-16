import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Dashboard from "../modules/home/screens/dashboard"
import Profile from "../modules/profile/screens/Profile"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export type Props={
    Dashboard:undefined,
    Profile:undefined
}

const Tab=createBottomTabNavigator<Props>()

const TabNavigation=()=>{
    return(
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = "dashboard";
          } else if (route.name === "Profile") {
            iconName = "person"
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
      })}>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
}

export default TabNavigation