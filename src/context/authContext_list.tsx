import React, { createContext, useContext, useRef, useState } from "react";
import {
  Text,
  View,
  Alert,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";
import { Input } from "../components/Input";
export const AuthContextList: any = createContext({});

export const AuthProviderList = (props: any): any => {
  const ModalizeRef = useRef<Modalize>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const onOpen = () => {
    ModalizeRef?.current?.open();
  };

  const onClose = () => {
    ModalizeRef?.current?.close();
  };

  const _container = () => {
    return (
      <View className="w-full">
        <View className="w-full h-[40px] px-[40px] flex-row mt-5 justify-between items-center">
          <TouchableOpacity onPress={() => onClose()}>
            <MaterialIcons name="close" size={30} />
          </TouchableOpacity>
          <Text className="text-xl font-bold">Criar Evento</Text>
          <TouchableOpacity>
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
          <View>
            <Input
              title="Data:"
              keyboardType="numeric"
              placeholder="DD/MM/AAAA"
            />
            <Input title="Hora:" keyboardType="numeric" placeholder="HH:MM" />
          </View>
        </View>
      </View>
    );
  };

  return (
    <AuthContextList.Provider value={{ onOpen }}>
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
export const useAuth = () => useContext(AuthContextList);
