import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function GraficoBarra() {
    const opcoes = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: {
                display: true,
                text: 'Gráfico de Barras'
            }
        }
    };

    const labels = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const dados = {
        labels,
        datasets: [
            {
                label: 'Chuva (mm)',
                data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
                backgroundColor: 'rgb(255, 135, 189)'
            },
            {
                label: 'Temperatura',
                data: labels.map(() => faker.number.int({ min: 0, max: 40 })),
                backgroundColor: 'rgb(177, 83, 255)'
            }
        ]
    };

    return <Bar options={opcoes} data={dados} />;
}