import { View, Text, ScrollView, Dimensions } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const dadosLinha = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{data: [39, 37, 33, 28, 27, 25]}]
}

const dadosPizza = [
    {
        name: 'Jardim Paulista', 
        temp: 18, 
        color: '#00aeff', 
        legendFontColor: '#7F7F7F', // Adicionado
        legendFontSize: 15          // Adicionado
    },
    {
        name: 'Portal dos Nobres', 
        temp: 20, 
        color: '#ae00ff', 
        legendFontColor: '#7F7F7F', // Adicionado
        legendFontSize: 15          // Adicionado
    },
    {
        name: 'Três Pontes', 
        temp: 15, 
        color: '#ff00dd', 
        legendFontColor: '#7F7F7F', // Adicionado
        legendFontSize: 15          // Adicionado
    },
    {
        name: 'Jardim Alto da Boa Vista', 
        temp: 15, 
        color: '#00ffb7', 
        legendFontColor: '#7F7F7F', // Adicionado
        legendFontSize: 15          // Adicionado
    }
]

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

export default function Dashboard() {
    return (
        <ScrollView>
            <Text>Estação Meteorológica SESI</Text>
            <View>
                <Text>Últimas Medições</Text>
                <Text>12/06/2026 25°C</Text>
                <Text>11/06/2026 22°C</Text>
                <Text>12/06/2026 80%</Text>
                <Text>11/06/2026 70%</Text>
            </View>
            <View>
                <Text>Acompanhe em Tempo Real</Text>
                <LineChart
                    data={dadosLinha}
                    width={width - 32}
                    height={200}
                    chartConfig={chartConfig}
                    bezier
                />
                <Text>Bairros de Mirandópolis</Text>
                <PieChart
                    data={dadosPizza}
                    width={width - 32}
                    height={200}
                    chartConfig={chartConfig}
                    accessor={'temp'}
                    backgroundColor={'transparent'}
                />
            </View>
        </ScrollView>
    )
}