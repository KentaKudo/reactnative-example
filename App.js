import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

import Home from "./components/Home";
import Details from "./components/Details";
import Settings from "./components/Settings";
import * as ROUTES from "./routes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.HOME}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
