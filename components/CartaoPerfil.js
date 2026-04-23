// Raiany Carolina 3ºC TEC

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function CartaoPerfil({ nome, profissao, cidade, email }) {
  function enviarEmail() {
    Alert.alert("E-mail enviado para: " + email);
  }

  return (
    <View style={styles.cartao}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.profissao}>{profissao}</Text>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text style={styles.email}>{email}</Text>

      <TouchableOpacity style={styles.botao} onPress={enviarEmail}>
        <Text style={styles.textoBotao}>Enviar E-mail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    width: 300,
    alignItems: "center",
    elevation: 6,
  },

  nome: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
  },

  profissao: {
    fontSize: 16,
    color: "#444",
    marginBottom: 5,
  },

  cidade: {
    fontSize: 15,
    color: "#666",
    marginBottom: 5,
  },

  email: {
    fontSize: 14,
    color: "#0077cc",
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#0077cc",
    paddingVertical: 12,
    borderRadius: 10,
    width: "100%",
  },

  textoBotao: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});