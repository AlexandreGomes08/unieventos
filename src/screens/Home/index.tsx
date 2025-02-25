import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type PropCard = {
  item: number;
  title: string;
  description: string;
  data: string;
};

const data: Array<PropCard> = [
  {
    item: 0,
    title: "semana da engenharia",
    description: "teste descricao",
    data: "02 de março",
  },
  {
    item: 1,
    title: "semana da engenharia 2",
    description: "teste descricao 2",
    data: "03 de março",
  },
  {
    item: 2,
    title: "semana da engenharia 3",
    description: "teste descricao 3",
    data: "04 de março",
  },
];

export default function Home() {
  const _renderCard = (item: PropCard) => {
    return (
      <TouchableOpacity className="w-full h-[60px] mt-2 p-2.5 justify-center bg-slate-50 rounded-lg ">
        <View className="flex-row items-center justify-between">
          <Text>{item.title}</Text>
          <Text>{item.data}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="bg-gray-600 h-full">
      <View className="bg-gray-600 py-12 px-6">
        <Text className="text-[20px] font-medium text-gray-200 mt-4">
          Olá, seja bem vindo!
        </Text>
      </View>
      <View className="bg-white-off h-full rounded-t-3xl">
        <FlatList
          data={data}
          style={{ marginTop: 40, paddingHorizontal: 30 }}
          keyExtractor={(item, index) => item.item.toString()}
          renderItem={({ item, index }) => {
            return _renderCard(item);
          }}
        />
      </View>
    </View>
  );
}
