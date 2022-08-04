import AppLoading from "expo-app-loading";
import React from "react";
import { Text, Image } from "react-native";
import { useState } from "react/cjs/react.development";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

import * as Font from "expo-font";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    //await 해야되는 모든 로딩을 담당하는 곳
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    await Font.loadAsync(Ionicons.font);
    // await Asset.loadAsync(require("url"));r

    /*
      let [fontsLoaded] = useFonts({
        'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
      });
    */
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading} // 끝나면 finish 함수 호출
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return <Text>hello, world</Text>;
}
