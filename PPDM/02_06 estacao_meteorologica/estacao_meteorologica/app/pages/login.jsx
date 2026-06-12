import { useState } from "react";
import {
  View, Text, TextInput, StyleSheet,
  TouchableOpacity, Image, SafeAreaView, StatusBar
} from 'react-native';
import Logo from '../../assets/estacao.jpg';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E0F2FE" />
      <View style={styles.inner}>

        <View style={styles.logoWrapper}>
          <Image source={Logo} style={styles.logo} />
        </View>

        <Text style={styles.title}>Bem-vindo</Text>

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

          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => navigation.replace('Principal')}
          >
            <Text style={styles.btnLoginText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ou</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={styles.btnRegisterText}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2FE', // Azul céu claro
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
    width: 100,
    height: 100,
    borderRadius: 50, // Deixa a logo redondinha se for quadrada
    borderWidth: 3,
    borderColor: '#FFFFFF', // Borda branca imitando o brilho do sol
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0369A1', // Azul profundo
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF', // Branco nuvem
    borderRadius: 24,
    padding: 24,
    shadowColor: '#0284C7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0284C7', // Azul médio para identificação rápida
    letterSpacing: 1,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F0F9FF', // Fundo sutil do input
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
    fontSize: 16,
    color: '#0369A1',
    fontWeight: '600',
    borderWidth: 1,
    borderColor: '#BAE6FD',
    marginBottom: 20,
  },
  btnLogin: {
    backgroundColor: '#F59E0B', // Amarelo/Laranja ensolarado para ação primária
    borderRadius: 12,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    marginTop: 8,
  },
  btnLoginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0F2FE',
  },
  dividerText: {
    marginHorizontal: 12,
    color: '#94A3B8',
    fontSize: 14,
  },
  btnRegister: {
    backgroundColor: '#F0F9FF', // Azul bem suave para ação secundária
    borderRadius: 12,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BAE6FD',
  },
  btnRegisterText: {
    color: '#0284C7', // Texto em azul combinando com o tema
    fontSize: 16,
    fontWeight: '700',
  },
});