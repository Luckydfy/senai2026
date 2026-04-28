import Header from "../components/header";

export default function Relatorio() {
    const leituras = [
        {horario: "12:00", qualidadeAr: "Boa", iqa: 44, temperatura: "36°C", umidade: "41%"},
        {horario: "14:00", qualidadeAr: "Média", iqa: 44, temperatura: "34°C", umidade: "49%"},
        {horario: "16:00", qualidadeAr: "Boa", iqa: 44, temperatura: "33°C", umidade: "56"},
        {horario: "18:00", qualidadeAr: "Muito Boa", iqa: 67, temperatura: "33,5°C", umidade: "67%"}
    ]

    return (
        <div className="container">
            <Header />
            <h2>Relatório da Estação Meteorológica</h2>
            <p>Dados sobre o clima em tempo real.</p>

            <section className="graficos">
                {/* inserir grafico */}
            </section>

            <section className="leituras">
                <table>
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Qualidade do Ar</th>
                            <th>IQA</th>
                            <th>Temperatura</th>
                            <th>Umidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leituras.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.horario}</td>
                                    <td>{item.qualidadeAr}</td>
                                    <td>{item.iqa}</td>
                                    <td>{item.temperatura}</td>
                                    <td>{item.umidade}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}