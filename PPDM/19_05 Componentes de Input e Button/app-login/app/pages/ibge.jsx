import { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LogoIbge from '../../assets/images/ibge.jpg';

export default function Ibge() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [pessoasCasa, setPessoasCasa] = useState('');

  function Login() {
    console.log('Dados:');
    console.log({ nome, idade, localidade, pessoasCasa });
  }

  return (
    <ScrollView style={estilos.container}>

      <Image
        source={LogoIbge}
        style={estilos.logo}
        resizeMode='contain'
      />
      <Text style={estilos.titulo}>Pesquisa</Text>
      <View style={estilos.form}>
        <Text style={estilos.label}>Nome</Text>
        <TextInput
          style={estilos.input}
          placeholder="Seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={estilos.label}>Idade</Text>
        <TextInput
          style={estilos.input}
          placeholder="Sua idade"
          keyboardType='numeric'
          value={idade}
          onChangeText={setIdade}
        />

        <Text style={estilos.label}>Localidade</Text>
        <TextInput
          style={estilos.input}
          placeholder="Sua cidade"
          value={localidade}
          onChangeText={setLocalidade}
        />

        <Text style={estilos.label}>
          Quantas pessoas vivem na sua casa?
        </Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite a quantidade"
          keyboardType='numeric'
          value={pessoasCasa}
          onChangeText={setPessoasCasa}
        />

        <TouchableOpacity style={estilos.botao} onPress={Login} >
          <Text style={estilos.botaoTexto}>Enviar</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    paddingHorizontal: 25,
    paddingTop: 50,
  },

  logo: {
    width: 180,
    height: 100,
    alignSelf: 'center',
    marginBottom: 15,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#005CA9',
    textAlign: 'center',
  },

  sub: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },

  form: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5,

    marginBottom: 40,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#005CA9',
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },

  botao: {
    backgroundColor: '#005CA9',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 25,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

});