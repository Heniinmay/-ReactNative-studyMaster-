import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";

const API_KEY = "df6a640ba90bbd3027c81cd514fa5e11";

const ScrollView = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;
const View = styled.View`
  flex: 1;
`;

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window"); // 화면 높이 구하기
// == const SCREEN_HEIGHT = Dimensions.get("window").height;

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = () => {
  const getNowPlaying = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=kr`
    );
  };
  return (
    <ScrollView>
      <Swiper
        loop
        timeout={3.5}
        controlsEnabled={false}
        containerStyle={{ width: "100%", height: SCREEN_HEIGHT / 4 }}
      >
        <View style={{ backgroundColor: "tomato" }}></View>
        <View style={{ backgroundColor: "teal" }}></View>
        <View style={{ backgroundColor: "salmon" }}></View>
        <View style={{ backgroundColor: "gold" }}></View>
      </Swiper>
    </ScrollView>
  );
};
export default Movies;
