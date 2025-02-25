import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Settings() {
  const navigation = useNavigation<NavigationProp<any>>();

  const showConfirmationAlert = () => {
    Alert.alert("Deseja realmente sair?", "", [
      {
        text: "Cancelar",
        onPress: () => console.log("Ação cancelada"),
        style: "cancel",
      },
      {
        text: "Confirmar",
        onPress: () => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        },
      },
    ]);
  };

  return (
    <View className="flex-1 bg-gray-600 h-full">
      <View className="mt-10 items-center bg-gray-600 w-full py-6">
        <MaterialIcons name="person" size={60} color={"#E1EBF4"} />
        <Text className="font-bold text-2xl text-gray-200">Usuário</Text>
        <Text className="text-sm text-gray-200">
          Conta vinculada em 29/10/2024
        </Text>
      </View>
      <View className="bg-slate-200 flex-1">
        {/* <View style={styles.divider} /> */}
        <View className="h-80 w-full px-3">
          <View className="flex-row mt-3">
            <MaterialIcons name="settings" size={20} color={"#6B6B6B"} />
            <Text className="text-xl font-medium px-1">Confiurações</Text>
          </View>
          {/* <View style={styles.divider} /> */}
          <View className="flex-row mt-3">
            <MaterialIcons name="history" size={20} color={"#6B6B6B"} />
            <Text className="text-xl font-medium px-1">Histórico</Text>
          </View>
          {/* <View style={styles.divider} /> */}
          <View className="flex-row mt-3">
            <MaterialIcons name="notifications" size={20} color={"#6B6B6B"} />
            <Text className="text-xl font-medium px-1">Notificações</Text>
          </View>
          {/* <View style={styles.divider} /> */}
          <View className="flex-row mt-3">
            <MaterialIcons name="moving" size={20} color={"#6B6B6B"} />
            <Text className="text-xl font-medium px-1">Resultados</Text>
          </View>
          {/* <View style={styles.divider} /> */}
        </View>
        <View className="w-full items-center">
          <TouchableOpacity
            className="h-[50px] w-[110px] flex-row items-center justify-center bg-gray-600 rounded-lg"
            onPress={showConfirmationAlert}
          >
            <MaterialIcons name="logout" size={20} color={"#FFF"} />
            <Text className="text-sm text-gray-50 px-1">LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
