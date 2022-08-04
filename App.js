import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { Asset, useAssets } from "expo-asset";
import * as Font from "expo-font";
import React from "react";
import { Image, Text } from "react-native";
import { useState } from "react/cjs/react.development";

export default function App() {
  //이 방법은 매우 간단하지만 loading 함수에 무슨 일을 시킬수가 없다. 로딩함수 안에 일을 시킬려면 startLoading; 이전 코드를 사용
  const [assets] = useAssets([require("./url")]);
  const [loaded] = Font.useFonts(Ionicons.font);
  if (!assets || !loaded) {
    return <AppLoading />;
  }
  return <Text>hello, world</Text>;
}
