import React, { createContext, useContext, useRef, useState } from "react";
import { Text, View, Alert, Dimensions, TouchableOpacity } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";
import { Input } from "../components/Input";
import { MaskedTextInput } from "react-native-mask-text";

// Definir tipo para os eventos
type Evento = {
  item: number;
  title: string;
  description: string;
  data: string;
  hora: string;
};

// Definir tipo para o contexto
type AuthContextType = {
  onOpen: () => void;
  eventos: Evento[];
};

export const AuthContextList = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProviderList = (props: any) => {
  const ModalizeRef = useRef<Modalize>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const [eventos, setEventos] = useState<Evento[]>([]);

  const onOpen = () => {
    ModalizeRef?.current?.open();
  };

  const onClose = () => {
    ModalizeRef?.current?.close();
  };

  const salvarEvento = () => {
    if (!title.trim() || !description.trim() || !data.trim() || !hora.trim()) {
      Alert.alert("Erro", "Todos os campos são obrigatórios!");
      return;
    }

    const novoEvento: Evento = {
      item: eventos.length,
      title,
      description,
      data,
      hora,
    };

    setEventos([...eventos, novoEvento]);

    setTitle("");
    setDescription("");
    setData("");
    setHora("");
    onClose();
  };

  const _container = () => {
    return (
      <View className="w-full">
        <View className="w-full h-[40px] px-[40px] flex-row mt-5 justify-between items-center">
          <TouchableOpacity onPress={onClose}>
            <MaterialIcons name="close" size={30} />
          </TouchableOpacity>
          <Text className="text-xl font-bold">Criar Evento</Text>
          <TouchableOpacity onPress={salvarEvento}>
            <AntDesign name="check" size={30} />
          </TouchableOpacity>
        </View>
        <View className="w-full px-[20px] mt-5">
          <Input title="Título:" value={title} onChangeText={setTitle} />
          <Input
            title="Descrição:"
            height={120}
            multiline={true}
            value={description}
            onChangeText={setDescription}
          />
          <Text className="text-lg font-bold mb-2">Data:</Text>
          <MaskedTextInput
            mask="99/99/9999"
            title="Data:"
            style={{
              backgroundColor: "#E1EBF4",
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 8,
              width: 115,
            }}
            keyboardType="numeric"
            placeholder="DD/MM/AAAA"
            value={data}
            onChangeText={setData}
          />
          <Text className="text-lg font-bold mb-2">Hora:</Text>
          <MaskedTextInput
            mask="99:99"
            title="Hora:"
            style={{
              backgroundColor: "#E1EBF4",
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 8,
              width: 73,
            }}
            keyboardType="numeric"
            placeholder="HH:MM"
            value={hora}
            onChangeText={setHora}
          />
        </View>
      </View>
    );
  };

  return (
    <AuthContextList.Provider value={{ onOpen, eventos }}>
      {props.children}
      <Modalize
        ref={ModalizeRef}
        childrenStyle={{ height: Dimensions.get("window").height / 1.3 }}
        adjustToContentHeight={true}
      >
        {_container()}
      </Modalize>
    </AuthContextList.Provider>
  );
};

// Função useAuth com verificação de contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContextList);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProviderList");
  }
  return context;
};
