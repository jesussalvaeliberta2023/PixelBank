import React from "react";
import { View, Modal } from "react-native";
import { useFonts, Prompt_400Regular } from "@expo-google-fonts/prompt";

import Btn from "../components/ButtonProps";
import Styles from "../style/StyleSheet";
import ImageProps from "../components/ImageProps";
import Txt from "../components/TextProps";
import InputProps from "../components/TextInputProps";

export default function LoginModal({visible, OnPress}) {

  const fontes = useFonts({
    Prompt_400Regular,
  });

  return (
    <View>
          <Modal animationType="slide" transparent={true} visible={visible} >
      <View style={Styles.container}>
      <ImageProps
        source={require("../assets/images/LogoBlue.png")}
        style={Styles.ImgLogo}
      />
      <Txt Texto="Faça login" TextStyle={Styles.textos} />
      <View style={Styles.caixas}>
        <ImageProps
          style={Styles.imagesicones}
        />
        <InputProps InputStyle={Styles.caixauser} Placeholder="Usuário" />
      </View>
      <View style={Styles.caixas}>
        <ImageProps
          style={Styles.imagesicones}
        />
        <InputProps InputStyle={Styles.caixasenha} Placeholder="Senha" />
        <Btn
              TouchStyle={[
                Styles.frtButtons,
                { backgroundColor: "#F5E2CF", marginRight: 10 },
              ]}
              letras={[Styles.firstButtons, { color: "#2F2C79" }]}
              children="Entrar"
              OnPress={OnPress}
            />
      </View>
    </View>
      </Modal>
    </View>
  );
}

