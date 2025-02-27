import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index.routes";

export default function EditEvent() {
  const route = useRoute<RouteProp<RootStackParamList, "EditEvent">>();
  const navigation = useNavigation();
  const { evento } = route.params as {
    evento: { title: string; description: string; data: string; hora: string };
  };

  // Estados para edição
  const [title, setTitle] = useState(evento.title);
  const [description, setDescription] = useState(evento.description);
  const [data, setData] = useState(evento.data);
  const [hora, setHora] = useState(evento.hora);

  const salvarEdicao = () => {
    // Aqui você pode atualizar o evento no contexto ou API
    console.log("Evento atualizado:", { title, description, data, hora });

    // Volta para a tela de detalhes após salvar
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-gray-600 h-full w-full">
      <View className="bg-gray-600 py-12 px-6 items-center">
        <Text className="text-[20px] font-medium text-gray-200 mt-4">
          Editar Evento
        </Text>
      </View>
      <View className="bg-white-off h-full rounded-t-3xl p-5">
        <TextInput
          className="bg-white p-3 rounded-lg text-lg mb-3"
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          className="bg-white p-3 rounded-lg text-lg mb-3"
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <TextInput
          className="bg-white p-3 rounded-lg text-lg mb-3"
          placeholder="Data (DD/MM/AAAA)"
          value={data}
          onChangeText={setData}
        />

        <TextInput
          className="bg-white p-3 rounded-lg text-lg mb-3"
          placeholder="Hora (HH:MM)"
          value={hora}
          onChangeText={setHora}
        />

        <TouchableOpacity
          className="mt-4 bg-gray-600 py-3 px-5 rounded-lg items-center"
          onPress={salvarEdicao}
        >
          <Text className="text-white-off font-bold text-lg">Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
