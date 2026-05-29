import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { profissionais } from '../../dados/profissionais';

export default function Profissionais() {
    return (
        <View style={styles.container}>
            <Text style={styles.tituloPagina}>Nossa Equipe</Text>
            
            <FlatList 
                data={profissionais}
                keyExtractor={item => item.id.toString()} // Garante que o id seja tratado como string
                contentContainerStyle={styles.listaContainer}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return ( // <--- O RETURN QUE FALTAVA ESTÁ AQUI!
                        <View style={styles.cartao}>
                            <View style={styles.avatarContainer}>
                                <Text style={styles.avatarTexto}>
                                    {item.nome.charAt(0).toUpperCase()}
                                </Text>
                            </View>
                            
                            <View style={styles.infoContainer}>
                                <Text style={styles.profissionalNome}>{item.nome}</Text>
                                <Text style={styles.especialidadeTexto}>
                                    📋 {item.especialidade}
                                </Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Fundo branco padrão do app
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    tituloPagina: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 20,
    },
    listaContainer: {
        paddingBottom: 20,
    },
    cartao: {
        backgroundColor: '#F9FAFB', 
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row', // Alinha o "avatar" ao lado dos textos
        alignItems: 'center',
    },
    avatarContainer: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: '#EEF2F6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    avatarTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4F46E5', // Tom Indigo do tema
    },
    infoContainer: {
        flex: 1,
    },
    profissionalNome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 4,
    },
    especialidadeTexto: {
        fontSize: 14,
        color: '#6B7280', // Cinza neutro para a especialidade
    },
});