import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import User from "../screens/User";
import Home from "../screens/Home";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}
