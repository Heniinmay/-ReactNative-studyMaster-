import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import Home from "../screens/Home";
import Movie from "../screens/Movie";
import Search from "../screens/Search";
import Tv from "../screens/Tv";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  //   <Tab.Navigator initialRouteName="Movie">
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "teal",
    }}
  >
    <Tab.Screen
      name="Movie"
      component={Movie}
      options={{
        headerTitleStyle: { color: "tomato" },
        headerRight: () => (
          <View>
            <Text>M</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen name="Tv" component={Tv}></Tab.Screen>
    <Tab.Screen name="Search" component={Search}></Tab.Screen>
  </Tab.Navigator>
);

export default Tabs;
