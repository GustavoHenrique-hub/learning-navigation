import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";

import Home from "./src/BottomTab/pages/Home";
import Profile from "./src/BottomTab/pages/Profile";
import Detail from "./src/BottomTab/pages/Detail";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {

  const [fontLoaded] = useFonts({
    Nunito_700Bold,
  });
  
  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
