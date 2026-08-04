import { useState } from "react";
import {
  View, Text, TextInput, StyleSheet, Alert,
  TouchableOpacity, Image, SafeAreaView, StatusBar, Platform
} from 'react-native';
import Logo from '../../assets/estacao.jpg';

export default function Registro({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');

  const exibirAlerta = (titulo, mensagem) => {
    // Se for Web usa o alert nativo do navegador, se for Mobile usa o componente Alert
    if (Platform.OS === 'web') {
      alert(`${titulo}: ${mensagem}`);
    } else {
      Alert.alert(titulo, mensagem);
    }
  };

  const handleCadastro = () => {
    // Validação simples de preenchimento
    if (!email || !senha || !confSenha) {
      exibirAlerta('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }

    // Validação se as senhas coincidem
    if (senha !== confSenha) {
      exibirAlerta('Erro', 'As senhas não coincidem!');
      return;
    }

    // Se tudo estiver certo, navega para a tela principal (Dashboard)
    exibirAlerta('Sucesso', 'Cadastro realizado com sucesso!');
    navigation.replace('Principal'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E0F2FE" />
      <View style={styles.inner}>

        <View style={styles.logoWrapper}>
          <Image source={Logo} style={styles.logo} />
        </View>

        <Text style={styles.title}>Cadastre-se</Text>

        <View style={styles.card}>
          <Text style={styles.label}>E-MAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            placeholderTextColor="#94A3B8"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>SENHA</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#94A3B8"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <Text style={styles.label}>CONFIRMAR SENHA</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#94A3B8"
            value={confSenha}
            onChangeText={setConfSenha}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.btnRegister}
            onPress={handleCadastro}
          >
            <Text style={styles.btnRegisterText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnBack}
            // CORREÇÃO: Volta para a tela de Login caso o usuário desista do cadastro
            onPress={() => navigation.navigate('Login')} 
          >
            <Text style={styles.btnBackText}>Voltar para o Login</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2FE',
  },
  inner: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0369A1',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    // Adicionado boxShadow para manter o padrão visual moderno na Web e Mobile
    boxShadow: '0px 4px 12px rgba(2, 132, 199, 0.08)',
    elevation: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0284C7',
    letterSpacing: 1,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F0F9FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 46,
    fontSize: 16,
    color: '#0369A1',
    fontWeight: '600',
    borderWidth: 1,
    borderColor: '#BAE6FD',
    marginBottom: 16,
  },
  btnRegister: {
    backgroundColor: '#F59E0B',
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  btnRegisterText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  btnBack: {
    backgroundColor: '#F0F9FF',
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BAE6FD',
    marginTop: 12,
  },
  btnBackText: {
    color: '#0284C7',
    fontSize: 16,
    fontWeight: '700',
  },
});