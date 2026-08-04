import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

// 1. Cores integradas ao tema nos dados da pizza
const dadosPizza = [
    { name: 'J. Paulista', temp: 18, color: '#0284C7', legendFontColor: '#334155', legendFontSize: 13 },
    { name: 'P. Nobres', temp: 20, color: '#F59E0B', legendFontColor: '#334155', legendFontSize: 13 },
    { name: 'Três Pontes', temp: 15, color: '#38BDF8', legendFontColor: '#334155', legendFontSize: 13 },
    { name: 'Boa Vista', temp: 15, color: '#FCD34D', legendFontColor: '#334155', legendFontSize: 13 }
];

const dadosLinha = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{ data: [39, 37, 33, 28, 27, 25] }]
};

// 2. Configuração do gráfico de linha adaptada para o fundo branco dos cards
const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientTo: "#FFFFFF",
    decimalPlaces: 0, 
    color: (opacity = 1) => `rgba(245, 158, 11, ${opacity})`, // Linha Laranja/Amarela
    labelColor: (opacity = 1) => `rgba(3, 105, 161, ${opacity})`, // Texto Azul Profundo
    style: { borderRadius: 16 },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#0284C7" // Pontos em Azul Médio
    }
};

export default function Dashboard() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.headerTitle}>Estação Meteorológica SESI</Text>
            
            {/* Bloco de Últimas Medições */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Últimas Medições</Text>
                
                <View style={styles.row}>
                    <View style={styles.measureItem}>
                        <Text style={styles.measureLabel}>Temperatura</Text>
                        <Text style={styles.measureValue}>25°C <Text style={styles.measureSub}>12/06</Text></Text>
                        <Text style={styles.measureValue}>22°C <Text style={styles.measureSub}>11/06</Text></Text>
                    </View>
                    
                    <View style={styles.measureItem}>
                        <Text style={styles.measureLabel}>Umidade</Text>
                        <Text style={styles.measureValue}>80% <Text style={styles.measureSub}>12/06</Text></Text>
                        <Text style={styles.measureValue}>70% <Text style={styles.measureSub}>11/06</Text></Text>
                    </View>
                </View>
            </View>

            {/* Bloco de Gráficos */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Acompanhe em Tempo Real</Text>
                <LineChart
                    data={dadosLinha}
                    width={width - 64} // Ajustado para o padding interno do card
                    height={180}
                    chartConfig={chartConfig}
                    bezier
                    style={styles.chart}
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Bairros de Mirandópolis</Text>
                <PieChart
                    data={dadosPizza}
                    width={width - 64}
                    height={180}
                    chartConfig={chartConfig}
                    accessor={'temp'}
                    backgroundColor={'transparent'}
                    paddingLeft={'0'}
                    style={styles.chart}
                />
            </View>
        </ScrollView>
    );
}

// 3. Estilização baseada no seu padrão de UI
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0F2FE', // Azul céu claro
    },
    content: {
        padding: 20,
        paddingBottom: 40,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0369A1', // Azul profundo
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    card: {
        backgroundColor: '#FFFFFF', // Branco nuvem
        borderRadius: 20,
        padding: 16,
        marginBottom: 20,
        boxShadow: '0px 4px 12px rgba(2, 132, 199, 0.08)', // Sombra suave combinando com a Web
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#0284C7', // Azul médio para cabeçalhos de seções
        marginBottom: 14,
        letterSpacing: 0.5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    measureItem: {
        flex: 1,
        backgroundColor: '#F0F9FF', // Fundo sutil para destacar os dados
        borderRadius: 12,
        padding: 12,
        marginHorizontal: 4,
        borderWidth: 1,
        borderColor: '#BAE6FD',
    },
    measureLabel: {
        fontSize: 12,
        fontWeight: '700',
        color: '#0369A1',
        marginBottom: 6,
        textTransform: 'uppercase',
    },
    measureValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#334155',
        marginBottom: 4,
    },
    measureSub: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '400',
    },
    chart: {
        borderRadius: 12,
        marginVertical: 8,
    },
});