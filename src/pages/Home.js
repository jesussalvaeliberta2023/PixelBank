import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Styles from "../style/StyleSheet";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text>Bem vindo</Text>
      <Button
        onPress={() => navigation.navigate("Transferencia")}
        title="Fazer transferencia"
      />
    </View>
  );
}
