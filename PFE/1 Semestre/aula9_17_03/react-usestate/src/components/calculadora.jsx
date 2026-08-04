import { useState } from "react";

export default function Calculadora() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function somar(e) {
        e.preventDefault();
        setResultado(Number(n1) + Number(n2));
    }
    function subtrair(e) {
        e.preventDefault();
        setResultado(Number(n1) - Number(n2));
    }
    function multiplicar(e) {
        e.preventDefault();
        setResultado(Number(n1) * Number(n2));
    }
    function dividir(e) {
        e.preventDefault();
        setResultado(Number(n1) / Number(n2));
    }

    return (
        <>
            <h1>Calculadora</h1>
            <form action="">
                <label htmlFor="">Número 1</label>
                <input type="number" value={n1} onChange={(e) => setN1(e.target.value)}/> <br />

                <label htmlFor="">Número 2</label>
                <input type="number" value={n2} onChange={(e) => setN2(e.target.value)}/> <br />

                <div>
                    <button onClick={somar}>Somar</button>
                    <button onClick={subtrair}>Subtrair</button>
                    <button onClick={multiplicar}>Multiplicar</button>
                    <button onClick={dividir}>Dividir</button> <br />
                </div>
                <span>Resultado: {resultado}</span>
            </form>
        </>
    )
}