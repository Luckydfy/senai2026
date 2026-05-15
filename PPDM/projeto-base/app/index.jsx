import { Text, View , FlatList, StyleSheet, Image, SafeAreaView} from "react-native";
import Header from "./componentes/Header";
import tarefas from "./dados/tarefas";

function ItemTarefa({item}) {
  return (
    <View style={estilos.card}>
      <Image source={{uri: item.photo}} style={estilos.foto} />
      <View style={estilos.conteudo}>
        <View style={estilos.linha}>
          <Text style={estilos.titulo}>{item.title}</Text>
          <Text style={estilos.status}>{item.status}</Text>
        </View>
        <Text style={estilos.descricao}>{item.description}</Text>
      </View>
    </View>
  )
}

export default function Index() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header titulo="Senai Tasks" />
      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <ItemTarefa item={item} />}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  foto: {
    width: '100%',
    height: 160
  }
})