import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import BottomRoutes from "./bottom.routes";
import EventDetails from "../screens/EventDetails";
import EditEvent from "../screens/EditEvent";

export type RootStackParamList = {
  Login: undefined;
  BottomRoutes: undefined;
  EventDetails: { evento: any };
};

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#1A1F24",
        },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
      <Stack.Screen name="EditEvent" component={EditEvent} />
    </Stack.Navigator>
  );
}
