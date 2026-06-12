import { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, Platform,
  TouchableOpacity, SafeAreaView, StatusBar
} from 'react-native';

export default function Cadastro() {
  const [temp, setTemp] = useState('');
  const [hum, setHum] = useState('');
  const [kmVento, setKmVento] = useState('');

  const handleSalvar = () => {
    if (!temp || !hum || !kmVento) {
      // Abre um alerta compatível com Web, iOS e Android
      alert('Atenção: Preencha todos os campos antes de salvar.');
      return;
    }
    
    alert('Sucesso: Medição salva com sucesso!');
    
    // Limpa os campos após salvar
    setTemp('');
    setHum('');
    setKmVento('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E0F2FE" />
      <View style={styles.inner}>

        <View style={styles.iconWrapper}>
          <Text style={styles.iconPlaceholder}>☀️</Text>
        </View>

        <Text style={styles.title}>Cadastro de medição</Text>
        <Text style={styles.subtitle}>Registre os dados climáticos</Text>

        <View style={styles.card}>

          <Text style={styles.label}>TEMPERATURA</Text>
          <View style={styles.fieldWrap}>
            <TextInput
              style={styles.input}
              placeholder="0.0"
              placeholderTextColor="#94A3B8"
              value={temp}
              onChangeText={setTemp}
              keyboardType="numeric"
            />
            <Text style={styles.unit}>°C</Text>
          </View>

          <Text style={styles.label}>UMIDADE</Text>
          <View style={styles.fieldWrap}>
            <TextInput
              style={styles.input}
              placeholder="0"
              placeholderTextColor="#94A3B8"
              value={hum}
              onChangeText={setHum}
              keyboardType="numeric"
            />
            <Text style={styles.unit}>%</Text>
          </View>

          <Text style={styles.label}>VELOCIDADE DO VENTO</Text>
          <View style={styles.fieldWrap}>
            <TextInput
              style={styles.input}
              placeholder="0"
              placeholderTextColor="#94A3B8"
              value={kmVento}
              onChangeText={setKmVento}
              keyboardType="numeric"
            />
            <Text style={styles.unit}>km/h</Text>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.btnSave} onPress={handleSalvar}>
            <Text style={styles.btnSaveText}>Salvar medição</Text>
          </TouchableOpacity>

          <Text style={styles.hint}>Todos os campos são obrigatórios</Text>

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
  iconWrapper: {
    alignItems: 'center',
    marginBottom: 12,
  },
  iconPlaceholder: {
    fontSize: 48,
    color: '#FBBF24', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0369A1', 
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#0284C7', 
    textAlign: 'center',
    marginBottom: 32,
  },
  card: {
    backgroundColor: '#FFFFFF', 
    borderRadius: 24,
    padding: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0284C7',
    letterSpacing: 1,
    marginBottom: 8,
  },
  fieldWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F9FF', 
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#BAE6FD', 
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#0369A1',
    fontWeight: '600',
  },
  unit: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0284C7',
    marginLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0F2FE',
    marginVertical: 12,
  },
  btnSave: {
    backgroundColor: '#F59E0B', 
    borderRadius: 12,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  btnSaveText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  hint: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 16,
    fontStyle: 'italic',
  },
});