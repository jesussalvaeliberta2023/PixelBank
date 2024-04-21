import { View, ImageBackground } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Prompt_400Regular } from "@expo-google-fonts/prompt";

import Btn from "../components/ButtonProps";
import Styles from "../style/StyleSheet";
import LoginModal from "../partials/Login";
import CadastroModal from "../partials/Cadastro";

export default function First() {
  const [visibleA, setVisibleA] = useState(false);
  const [visibleB, setVisibleB] = useState(false);
  const navigation = useNavigation();

  const fontes = useFonts({
    Prompt_400Regular,
  });

  return (
    <View>
      <StatusBar backgroundColor="#F0EDE9" />
      <ImageBackground
        source={require("../assets/images/Fundo1.png")}
        style={{ width: "100%", height: "100%", marginTop: "10%" }}
      >
        <View style={Styles.firstFooter}>
          <Btn
            TouchStyle={[
              Styles.frtButtons,
              { backgroundColor: "#F5E2CF", marginRight: 10 },
            ]}
            letras={[Styles.firstButtons, { color: "#2F2C79" }]}
            children="Entrar"
            OnPress={() => setVisibleA(true)}
          />

          <Btn
            TouchStyle={[
              Styles.frtButtons,
              { backgroundColor: "#2F2C79", marginLeft: 10 },
            ]}
            letras={[Styles.firstButtons, { color: "#F5E2CF" }]}
            children="Criar conta"
            OnPress={() => setVisibleB(true)}
          />
        </View>

        <LoginModal
          visible={visibleA}
          OnPress={() => navigation.navigate("Transferencia")}
        />

        <CadastroModal
          visible={visibleB}
          OnPress={() => navigation.navigate("Transferencia")}
        />
      </ImageBackground>
    </View>
  );
}
