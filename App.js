import React from "react";
import AppLoading from "expo-app-loading";
import { useState } from "react/cjs/react.development";
import { Text } from "react-native";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    //await 해야되는 모든 로딩을 담당하는 곳
    await new Promise((resolve) => setTimeout(resolve, 5000));
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
