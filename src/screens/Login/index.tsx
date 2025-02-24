import "../../styles/global.css";
import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const formatCpf = (text: string) => {
    const cleaned = text.replace(/\D/g, "").slice(0, 11);

    return cleaned.replace(
      /(\d{3})(\d{3})(\d{3})(\d{0,2})/,
      (_, p1, p2, p3, p4) =>
        p4 ? `${p1}.${p2}.${p3}-${p4}` : `${p1}.${p2}.${p3}`
    );
  };

  const handleCpfChange = (text: string) => {
    setCpf(formatCpf(text));
  };

  const checkUserExists = (cpf: string) => {
    const existingUsers = ["111.222.333-44", "555.666.777-88"];
    return existingUsers.includes(cpf);
  };

  const handleLogin = () => {
    if (cpf.length < 14 || !password) {
      Alert.alert("Erro", "Preencha todos os campos corretamente.");
      return;
    }

    if (checkUserExists(cpf)) {
      navigation.reset({
        index: 0,
        routes: [{ name: "BottomRoutes" }],
      });
    } else {
      // Alert.alert("Cadastro", "Usuário cadastrado com sucesso!");
      navigation.reset({
        index: 0,
        routes: [{ name: "BottomRoutes" }],
      });
    }
  };

  return (
    <View className="flex-1 bg-gray-600">
      <View className="items-center mt-20 flex-1 px-6 pt-10 bg-gray-600">
        <Image
          source={require("../../assets/icon.png")}
          style={{ width: 130, height: 130 }}
        />
        <Text className="text-2xl font-medium text-gray-100 mt-[-20px]">
          UniEventos
        </Text>
      </View>
      <View className="flex-1 px-6 py-10 bg-slate-100 rounded-t-3xl">
        <Text className="text-[24px] font-bold text-gray-500 mb-4">
          Olá, seja bem vindo!
        </Text>
        <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-2 mb-4">
          <MaterialIcons name="person" size={25} color={"gray"} />
          <TextInput
            className="flex-1 ml-2 text-gray-700"
            placeholder="Digite seu CPF"
            placeholderTextColor="#A9A9A9"
            value={cpf}
            onChangeText={handleCpfChange}
            keyboardType="decimal-pad"
            maxLength={14}
          />
        </View>
        <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-2 mb-4">
          <MaterialIcons name="lock" size={25} color={"gray"} />
          <TextInput
            className="flex-1 ml-2 text-gray-700"
            placeholder="**********"
            placeholderTextColor="#A9A9A9"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          className="bg-gray-600 py-3 rounded-lg items-center mb-4"
          onPress={handleLogin}
        >
          <Text className="text-white text-lg font-medium">LOGIN</Text>
        </TouchableOpacity>
        <View className="mt-[12px] flex flex-row items-center ml-2">
          <AntDesign name="infocirlce" size={14} color="gray" />
          <Text className="text-xs font-extralight ml-2">
            Dica: Utilize a mesma senha do Sigaa UFC.
          </Text>
        </View>
      </View>
    </View>
  );
}
