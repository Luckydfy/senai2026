import Header from "../components/header";
import GraficoBarra from "../components/graficoBarra";

export default function Dashboard() {
    return (
        <div className="dashboard-main">
            <Header />
            <br />
            <section className="cards">
                <div className="card">
                    <h6>Temperatura</h6>
                    <h2>32°C</h2>
                </div>
                <div className="card">
                    <h6>Umidade</h6>
                    <h2>67%</h2>
                </div>
                <div className="card">
                    <h6>Pressão</h6>
                    <h2>1013 hPa</h2>
                </div>
                <div className="card">
                    <h6>Vento</h6>
                    <h2>12 km/h</h2>
                </div>
            </section>
            <br />
            <section className="graficos">
                <h6>Gráficos</h6>
                <div className="grafico">
                    <GraficoBarra />
                </div>
                <div className="grafico">
                    <GraficoBarra />
                </div>
            </section>
            <br />
            <section className="leituras">
                <h6>Leituras Recentes</h6>
                <table>
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Temperatura</th>
                            <th>Umidade</th>
                            <th>Vento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12:00</td>
                            <td>38°C</td>
                            <td>67%</td>
                            <td>10 km/h</td>
                        </tr>
                        <tr>
                            <td>13:00</td>
                            <td>37°C</td>
                            <td>67%</td>
                            <td>13 km/h</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}