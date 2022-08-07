import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, useColorScheme } from "react-native";
import Home from "../screens/Home";
import Movie from "../screens/Movie";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  //   console.log(isDark);
  return (
    //   <Tab.Navigator initialRouteName="Movie">
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? "#1e272e" : "white",
        },
        tabBarActiveTintColor: isDark ? "#ffa801" : "#1e272e",
        tabBarInactiveTintColor: isDark ? "#d2dae2" : "#808e9b",
        headerStyle: {
          backgroundColor: isDark ? "#1e272e" : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : "#1e272e",
        },
        headerRightContainerStyle: {
          color: isDark ? "white" : "#1e272e",
        },
      }}
    >
      <Tab.Screen
        name="Movie"
        component={Movie}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"film-outline"} color={color} size={size} />
          ),
          headerRight: () => (
            <View>
              <Text>M</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Tv" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default Tabs;
