import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";

const Btn = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: ${(props) => (props.selected ? "blue" : "red")};
`;
const Movie: React.FC<NativeStackScreenProps<any, "Movie">> = ({
  navigation: { navigate },
}) => (
  <Btn
    onPress={() => navigation.navigate("Stack", { screen: "Three" })} // 옮기고자 하는 navi를 적고 이동할 스크린을 적는다 (네비게이션 > scsreen )
  >
    <Title selected={true}>Movie</Title>
  </Btn>
);

export default Movie;
