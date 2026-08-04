import imgMusculacao from '../assets/img/musculacao.jpg'
import imgCardio from '../assets/img/cardio.jpg'
import imgYoga from '../assets/img/yoga.jpg'
export default function Main() {
    return (
        <main>
            <section id="home">
                <h2>Transforma seu corpo com a <span>Fofitness</span></h2>
                <p>A academia perfeita para quem quer ficar no Shape</p>
                <button>Começar Agora</button>
            </section>

            <section id="sobre">
                <h2>Sobre nós</h2>
                <p>Somos uma academia comprometida com a saúde e o bem-estar de nossos clientes.</p>
            </section>
            <section id="modalidades" className='modalidades'>
                <h2>Nossas Modalidades</h2>
                <div>
                    <h3>Musculação</h3>
                    <img src={imgMusculacao} alt="Musculação" />
                </div>
                <div>
                    <h3>Cardio</h3>
                    <img src={imgCardio} alt="Cardio" />
                </div>
                <div>
                    <h3>Yoga</h3>
                    <img src={imgYoga} alt="Yoga" />
                </div>
            </section>
            <section id="planos">
                <h2>Planos e Preços</h2>
                <div className="tabela-planos">
                    <div className="plano">
                        <h3>Básico</h3>
                        <p>R$79,90/mês</p>
                        <ul>
                            <li>Acesso a musculação</li>
                            <li>Aulas coletivas</li>
                            <li>Horário livre</li>
                        </ul>
                    </div>
                    <div className="plano">
                        <h3>Premium</h3>
                        <p>R$129,90/mês</p>
                        <ul>
                            <li>Acesso total</li>
                            <li>Personal trainer</li>
                            <li>Yoga & Funcional</li>
                        </ul>
                    </div>
                    <div className="plano">
                        <h3>Vip</h3>
                        <p>R$199,90/mês</p>
                        <ul>
                            <li>Personal exclusivo</li>
                            <li>Nutricionista</li>
                            <li>Café na entrada</li>
                            <li>Sorriso da(o) atendente na entrada</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="depoimentos">
                <h2>O que nossos alunos estão dizendo</h2>
                <div>
                    <p>"Academina incrível! Um dia e eu já me sinto maromba."</p>
                    <span>Jorge</span>
                </div>
                <div>
                    <p>"Não gostei porque não tem ar condicionado"</p>
                    <span>Miguel</span>
                </div>
            </section>
            <section id="contato" className='contato'>
                <h2>Entre em contato</h2>
                <form action="">
                    <input type="text" placeholder="Seu nome" />
                    <input type="email" placeholder="Seu email" />
                    <textarea placeholder="Sua mensagem"></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </main>
    )
}