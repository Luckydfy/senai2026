import { Text, View, StyleSheet, Image, ScrollView, StatusBar } from "react-native";
import Imagem from "../assets/images/Imagem.jpg";

export default function Index() {
  return (
    <ScrollView style={estilos.fundo}>
      <StatusBar barStyle="dark-content" />
      <View style={estilos.container}>
        
        <Text style={estilos.tituloPrincipal}>My First App</Text>
        
        <Image source={Imagem} style={estilos.imagem} resizeMode="cover" />

        <View style={estilos.secao}>
          <Text style={estilos.subtitulo}>Sobre o App</Text>
          <Text style={estilos.texto}>Aplicativo desenvolvido para aprender React Native.</Text>
        </View>

        <View style={estilos.secao}>
          <Text style={estilos.subtitulo}>O que Aprenderemos</Text>
          <Text style={estilos.item}>• Layout responsivo</Text>
          <Text style={estilos.item}>• Push Notification</Text>
          <Text style={estilos.item}>• Acesso a APIs</Text>
        </View>

        <View style={estilos.secao}>
          <Text style={estilos.subtitulo}>Do que precisamos</Text>
          <Text style={estilos.item}>• Node.js</Text>
          <Text style={estilos.item}>• VS Code</Text>
          <Text style={estilos.item}>• Foco, força e fé</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    padding: 20,
  },
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#260073",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  imagem: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  secao: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  texto: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },
  item: {
    fontSize: 16,
    color: "#444",
    marginVertical: 4,
  }
});