import React from "react";
// import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button } from "react-native";

import Home from "./components/Home";
import Details from "./components/Details";
import News from "./components/News";
import Settings from "./components/Settings";
import StockContext from "./components/stock";
import * as ROUTES from "./routes";

const Stack = createStackNavigator();

// const { Navigator } = Platform.select({
//   ios: { Navigator: createBottomTabNavigator() },
//   android: { Navigator: createDrawerNavigator() },
// });

const INITIAL_STOCK = {
  first: 1,
  second: 0,
  third: 200,
};

export default function App() {
  const [stock, setStock] = React.useState({ ...INITIAL_STOCK });
  const updateStock = (id) =>
    setStock({ ...stock, [id]: stock[id] === 0 ? 0 : stock[id] - 1 });

  return (
    <StockContext.Provider value={{ stock, updateStock }}>
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
              const { title, id } = route.params;

              return {
                title,
                headerRight: () => (
                  <Button
                    title="Buy"
                    onPress={() => updateStock(id)}
                    disabled={stock[id] === 0}
                  />
                ),
              };
            }}
          />
          <Stack.Screen name={ROUTES.NEWS} component={News} />
          <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
        </Stack.Navigator>
        {/* <Navigator.Navigator initialRouteName={ROUTES.HOME}>
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
      </Navigator.Navigator> */}
      </NavigationContainer>
    </StockContext.Provider>
  );
}
