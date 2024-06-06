import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { styles } from "../config/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  function realizaLogin() {
    console.log("Fazer Login");
    if (email === "") {
      setErro({ ...erro, email: true });
      setErrorMessage("Email é obrigatório.");
      showModal();
      return;
    } else {
      setErro({ ...erro, email: false });
    }
    if (senha === "") {
      setErro({ ...erro, senha: true });
      setErrorMessage("Senha é obrigatória.");
      showModal();
      return;
    } else {
      setErro({ ...erro, senha: false });
    }
    handleLogin();
  }


  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        navigation.navigate("News");
      })
      .catch((error) => {
        setErro(error.message);
      });
  };
  return (
    <View >
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        secureTextEntry
      />
      <View>
      <Button title="Login" onPress={realizaLogin} />
      {/* {error ? <Text>{error}</Text> : null} */}
        </View>
      <Button title="Registrar"onPress={() => navigation.navigate("Registrar")}>
          Faça seu cadastro
        </Button>
    </View>
  );
}