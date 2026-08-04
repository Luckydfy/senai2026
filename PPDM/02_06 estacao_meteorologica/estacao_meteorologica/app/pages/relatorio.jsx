import { View, Text, FlatList, StyleSheet } from 'react-native';

const medicoes = [
    { id: 1, temp: 30, hum: 50, vento: 20, mes: 'Jan' },
    { id: 2, temp: 32, hum: 55, vento: 25, mes: 'Fev' },
    { id: 3, temp: 35, hum: 60, vento: 30, mes: 'Mar' },
    { id: 4, temp: 29, hum: 30, vento: 38, mes: 'Abr' }
];

// Componente de cada item da lista estilizado como um Card com colunas
function ItemLista({ item }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.mesText}>Mês: {item.mes}</Text>
            </View>
            
            <View style={styles.grid}>
                <View style={styles.gridItem}>
                    <Text style={styles.itemLabel}>Temperatura</Text>
                    <Text style={styles.itemValue}>{item.temp}°C</Text>
                </View>

                <View style={styles.gridItem}>
                    <Text style={styles.itemLabel}>Umidade</Text>
                    <Text style={styles.itemValue}>{item.hum}%</Text>
                </View>

                <View style={styles.gridItem}>
                    <Text style={styles.itemLabel}>Vento</Text>
                    <Text style={styles.itemValue}>{item.vento} km/h</Text>
                </View>
            </View>
        </View>
    );
}

export default function Relatorio() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Relatório de Medições Meteorológicas</Text>
            
            <FlatList
                data={medicoes}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ItemLista item={item} />}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

// Estilos seguindo a paleta de cores solar e azul do app
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0F2FE', // Azul céu claro
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0369A1', // Azul profundo
        textAlign: 'center',
        marginVertical: 20,
    },
    listContent: {
        paddingBottom: 24, // Espaço no fim da lista para não cortar o último item
    },
    card: {
        backgroundColor: '#FFFFFF', // Branco nuvem
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        boxShadow: '0px 4px 12px rgba(2, 132, 199, 0.06)', // Sombra suave
        elevation: 3,
        borderWidth: 1,
        borderColor: '#E0F2FE',
    },
    cardHeader: {
        borderBottomWidth: 1,
        borderBottomColor: '#F0F9FF',
        paddingBottom: 8,
        marginBottom: 12,
    },
    mesText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#F59E0B', // Amarelo/Laranja ensolarado para destacar o mês
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    gridItem: {
        flex: 1,
        alignItems: 'center',
    },
    itemLabel: {
        fontSize: 11,
        fontWeight: '600',
        color: '#0284C7', // Azul médio
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    itemValue: {
        fontSize: 15,
        fontWeight: '700',
        color: '#334155', // Grafite escuro para leitura clara dos dados
    },
});