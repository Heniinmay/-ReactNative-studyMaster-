import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";

const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text>Go Two</Text>
  </TouchableOpacity>
);
const ScreenTwo = ({ navigation: { navigate, goBack } }) => (
  <>
    <TouchableOpacity onPress={() => navigate("Three")}>
      <Text>Go Three</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => goBack()}>
      <Text>Go Back</Text>
    </TouchableOpacity>
  </>
);
const ScreenThree = ({ navigation: { goBack, setOptions } }) => (
  <TouchableOpacity onPress={() => setOptions({ title: "Hello, world!" })}>
    <Text>Change Title</Text>
  </TouchableOpacity>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        // presentation: "modal",
        /* headerShown: false*/
      }}
    >
      <NativeStack.Screen name="One" component={ScreenOne} />
      <NativeStack.Screen name="Two" component={ScreenTwo} />
      <NativeStack.Screen
        name="Three"
        component={ScreenThree}
        options={{ presentation: "modal" }}
      />
    </NativeStack.Navigator>
  );
};

export default Stack;
