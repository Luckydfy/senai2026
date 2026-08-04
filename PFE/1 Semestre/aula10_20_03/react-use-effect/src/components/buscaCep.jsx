import { useState, useEffect } from "react";

export default function BuscaCep() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);

    useEffect(() => {
        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (data.erro) {
                        setEndereco(null);
                        alert('Cep não encontrado');
                    } else {
                        setEndereco(data);
                    }
                })
                .catch(error => console.error('Erro:', error));
        }
    }, [cep]);

    return (
        <>
            <h1>Busca Cep</h1>
            <input 
                type="text"
                maxLength="8"
                placeholder="Digite o CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
            />

            {endereco && (
                <div>
                    <p>Logradouro: {endereco.logradouro}</p>
                    <p>Bairro: {endereco.bairro}</p>
                    <p>Cidade: {endereco.localidade}</p>
                </div>
            )}
        </>
    );
}