import React from "react";

import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="bg-slate-200 h-full">
      <View className="bg-gray-600 py-12 px-6">
        <Text className="text-[20px] font-medium text-gray-200 mt-4">
          Olá, seja bem vindo!
        </Text>
      </View>
    </View>
  );
}
