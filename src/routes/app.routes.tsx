import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "@screens/Home"
import { NewMovimentation } from "@screens/NewMovimentation"
import { Movimentation } from "@screens/Movimentation"
const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator 
    screenOptions={{headerShown:false}}
    initialRouteName="home">
      <Screen name="home" component={Home} />

      <Screen name="movimentation" component={Movimentation} />

      <Screen name="newMovimentation" component={NewMovimentation} />
    </Navigator>
  )
}
