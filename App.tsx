import { NavigationContainer } from "@react-navigation/native"
import StackNavigation from "./src/routes/stackNavigation"
import { Provider } from "react-redux"
import { persistor, store } from "./src/redux/store"
import { PersistGate } from "redux-persist/integration/react"


const App=()=>{

  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    </PersistGate>
    </Provider>
  )
}

export default App