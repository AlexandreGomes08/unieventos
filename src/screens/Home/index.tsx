import React from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import { useAuth } from "../../context/authContext_list";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index.routes"; // Importe os tipos

export default function Home() {
  const { eventos } = useAuth();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const _renderCard = (item: any) => {
    return (
      <TouchableOpacity
        className="w-full h-[120px] p-4 justify-around bg-gray-400 rounded-3xl mb-5"
        onPress={() => navigation.navigate("EventDetails", { evento: item })}
      >
        <View className="flex-row items-center justify-between">
          <Text className="font-bold text-xl text-slate-200">{item.title}</Text>
          <Text className="text-slate-300">{item.data}</Text>
        </View>
        <Text className="font-medium text-slate-300">{item.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="bg-gray-600 h-full">
      <View className="bg-gray-600 py-10 px-6 items-center rounded-t-3xl">
        <Text className="text-[25px] font-bold text-gray-200 mt-4">
          Todos os Eventos
        </Text>
      </View>
      <View className="bg-gray-600 h-full w-full rounded-t-3xl">
        {eventos.length === 0 ? (
          <Text className="text-center text-gray-400 mt-10">
            Nenhum evento cadastrado.
          </Text>
        ) : (
          <FlatList
            data={eventos}
            style={{ marginTop: 40, paddingHorizontal: 30 }}
            keyExtractor={(item) => item.item.toString()}
            renderItem={({ item }) => _renderCard(item)}
          />
        )}
      </View>
    </View>
  );
}
