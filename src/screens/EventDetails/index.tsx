import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index.routes";

export default function EventDetails() {
  const route = useRoute<RouteProp<RootStackParamList, "EventDetails">>();
  const navigation = useNavigation();
  const { evento } = route.params;

  return (
    <View className="flex-1 bg-gray-600 h-full w-full mt-2">
      <View className="bg-gray-600 py-12 px-6 items-center">
        <Text className="text-[20px] font-medium text-gray-200 mt-4">
          Detalhes do Evento
        </Text>
      </View>

      <View className="bg-white-off h-full rounded-t-3xl p-5">
        <Text className="text-2xl font-bold">{evento.title}</Text>
        <Text className="text-lg mt-4 text-gray-600">{evento.description}</Text>
        <Text className="text-gray-600 mt-2">
          {evento.data} às {evento.hora}
        </Text>

        {/* Botão de edição */}
        <TouchableOpacity
          className="mt-6 bg-gray-600 py-3 px-5 rounded-lg items-center"
          onPress={() => navigation.navigate("EditEvent", { evento })}
        >
          <Text className="text-white-off font-bold text-lg">
            Editar Evento
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
