import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React from "react";
import { Image, Text } from "react-native";
import { useState } from "react/cjs/react.development";

// 배열 fonts를 loadFonts 함수에 주면 Font.loadAsync(font)로 이루어진 배열을 리턴 받을 거야
const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadImages = (Images) =>
  Images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    //await 해야되는 모든 로딩을 담당하는 곳
    const fonts = loadFonts([Ionicons.font]);
    // const images = loadImages([require("./assets/image.png"),"https://url.com"]); // image 배열
    await Promise.all([...fonts, ...images]);
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
