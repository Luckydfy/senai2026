import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { atendimentos } from '../../dados/profissionais';

export default function Atendimentos() {
    return (
        <View style={styles.container}>
            <Text style={styles.tituloPagina}>Seus Atendimentos</Text>
            
            <FlatList 
                data={atendimentos}
                keyExtractor={item => item.id.toString()} // Garante que o id seja uma string
                contentContainerStyle={styles.listaContainer}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return ( // <--- O RETURN QUE FALTAVA ESTÁ AQUI!
                        <View style={styles.cartao}>
                            <View style={styles.headerCartao}>
                                <Text style={styles.petNome}>🐾 {item.pet}</Text>
                                <View style={styles.badgeHorario}>
                                    <Text style={styles.horarioTexto}>{item.horario}</Text>
                                </View>
                            </View>
                            
                            <Text style={styles.servicoTexto}>
                                <Text style={styles.label}>Serviço: </Text>
                                {item.servico}
                            </Text>
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
        backgroundColor: '#FFFFFF', // Fundo branco limpo
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
        paddingBottom: 20, // Espaço no final da rolagem
    },
    cartao: {
        backgroundColor: '#F9FAFB', // Fundo sutil do card
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    headerCartao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    petNome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4F46E5', // Tom Indigo padrão do app
    },
    badgeHorario: {
        backgroundColor: '#EEF2F6',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
    },
    horarioTexto: {
        fontSize: 12,
        fontWeight: '600',
        color: '#4B5563',
    },
    servicoTexto: {
        fontSize: 14,
        color: '#4B5563',
    },
    label: {
        fontWeight: '600',
        color: '#1F2937',
    },
});