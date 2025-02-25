import React, { useContext } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { AuthContextList } from "../../context/authContext_list";

export default ({ state, navigation }) => {
  const { onOpen } = useContext<any>(AuthContextList);

  const go = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View className="flex-row justify-around h-20 bg-gray-600">
      <TouchableOpacity
        className="flex-1 items-center justify-center"
        onPress={() => go("Home")}
      >
        <AntDesign
          name="bars"
          style={{
            opacity: state.index === 0 ? 1 : 0.3,
            color: "#FCFDFE",
            fontSize: 32,
          }}
          color="gray"
        />
      </TouchableOpacity>
      <TouchableOpacity
        className="flex-1 items-center justify-center"
        onPress={() => onOpen()}
      >
        <View className="bg-gray-100 rounded-[35px] p-4 top-[-30] ">
          <Image
            source={require("../../assets/add.png")}
            style={{ width: 45, height: 45 }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex-1 items-center justify-center"
        onPress={() => go("User")}
      >
        <FontAwesome
          name="user"
          style={{
            opacity: state.index === 1 ? 1 : 0.3,
            color: "#FCFDFE",
            fontSize: 32,
          }}
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
};
