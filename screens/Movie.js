import react from "react";
import { TouchableOpacity, Text } from "react-native";

const Movie = ({ navigation: { navigate, goBack } }) => (
  <TouchableOpacity
    onPress={() => navigate("Stack", { screen: "Three" })} // 옮기고자 하는 navi를 적고 이동할 스크린을 적는다 (네비게이션 > scsreen )
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>Movie</Text>
  </TouchableOpacity>
);

export default Movie;
