import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Button } from "react-native";

import Home from "./components/Home";
// import Details from "./components/Details";
import News from "./components/News";
import Settings from "./components/Settings";
import * as ROUTES from "./routes";

// const Stack = createStackNavigator();

const { Navigator } = Platform.select({
  ios: { Navigator: createBottomTabNavigator() },
  android: { Navigator: createDrawerNavigator() },
});

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName={ROUTES.HOME}>
        <Stack.Screen
          name={ROUTES.HOME}
          component={Home}
          options={{ title: ROUTES.HOME }}
        />
        <Stack.Screen
          name={ROUTES.DETAILS}
          component={Details}
          options={({ route }) => {
            const { title, stock } = route.params;

            return {
              title,
              headerRight: () => (
                <Button title="Buy" onPress={() => {}} disabled={stock === 0} />
              ),
            };
          }}
        />
        <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
      </Stack.Navigator> */}
      <Navigator.Navigator initialRouteName={ROUTES.HOME}>
        <Navigator.Screen
          name={ROUTES.HOME}
          component={Home}
          options={{ title: ROUTES.HOME }}
        />
        <Navigator.Screen
          name={ROUTES.NEWS}
          component={News}
          options={{ title: ROUTES.NEWS }}
        />
        <Navigator.Screen
          name={ROUTES.SETTINGS}
          component={Settings}
          options={{ title: ROUTES.SETTINGS }}
        />
      </Navigator.Navigator>
    </NavigationContainer>
  );
}
