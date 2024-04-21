import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import First from "./src/pages/First";
import Home from "./src/pages/Home";
import Transferencia from "./src/pages/Transferencia"
import TransferenciaConfirmacao from "./src/pages/TransferenciaConfirmacao";
import Perfil from "./src/pages/Perfil";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First"
          component={First}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transferencia"
          component={Transferencia}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransferenciaConfirmacao"
          component={TransferenciaConfirmacao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}