import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.titulo}>Bem-vindo ao Sesi Pet</Text>
                <Text style={styles.subtitulo}>Insira seus dados para acessar o app</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder='exemplo@email.com'
                    placeholderTextColor='#9CA3AF'
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Sua senha secreta'
                    placeholderTextColor='#9CA3AF'
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                    autoCapitalize="none"
                />

                <TouchableOpacity 
                    style={styles.botaoEntrar} 
                    onPress={() => navigation.replace('Principal')}
                >
                    <Text style={styles.botaoEntrarTexto}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.botaoCriarConta} 
                    onPress={() => navigation.navigate('Registro')}
                >
                    <Text style={styles.botaoCriarContaTexto}>Não tem uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    headerContainer: {
        marginBottom: 32,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1F2937', // Cinza escuro quase preto
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 16,
        color: '#6B7280', // Cinza neutro
    },
    form: {
        width: '100%',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 6,
        marginTop: 12,
    },
    input: {
        height: 52,
        backgroundColor: '#F9FAFB', // Fundo sutil para o input
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#1F2937',
    },
    botaoEntrar: {
        height: 52,
        backgroundColor: '#4F46E5', // Indigo correspondente ao tema do app
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
        botaoEntrar: {
        elevation: 2, // Mantém para funcionar o sombreado no Android físico
        boxShadow: '0px 2px 4px rgba(79, 70, 229, 0.2)', // Formato moderno que a Web aceita
    },
    },
    botaoEntrarTexto: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    botaoCriarConta: {
        marginTop: 16,
        alignItems: 'center',
    },
    botaoCriarContaTexto: {
        color: '#4F46E5',
        fontSize: 14,
        fontWeight: '600',
    },
});