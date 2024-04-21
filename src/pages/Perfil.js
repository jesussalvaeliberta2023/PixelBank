import { View } from "react-native";
import React from "react";

import Styles from "../style/StyleSheet"; // Importacao do Styles
import Txt from "../components/TextProps"; // Importacao do Component Text
import ImageProps from "../components/ImageProps"; // Importacao do Componente Imagem
import InputProps from "../components/TextInputProps"; // Importação do Componente Text Input

export default function Perfil() {
  return (
    <View style={Styles.container}>
      <ImageProps
        source={require("../assets/images/LogoBlue.png")}
        style={Styles.ImgLogo}
      />
      <Txt Texto="Faça login" TextStyle={Styles.textos} />
      <InputProps InputStyle={Styles.caixauser} Placeholder="Usuário" />
      <InputProps InputStyle={Styles.caixasenha} Placeholder="Senha" />
    </View>
  );
}
