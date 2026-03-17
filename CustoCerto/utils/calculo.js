async function calcularCustoReceita(id_receita, bd) {

    const resultado = await bd.query(`
        SELECT
        ri.quantidade,
        i.preco_unitario
        FROM receita_ingredientes ri
        JOIN ingredientes i
        ON ri.id_ingrediente = i.id_ingrediente
        WHERE ri.id_receita = $1
    `, [id_receita]);

    let total = 0;

    resultado.rows.forEach(i => {
        total += i.quantidade * i.preco_unitario;
    });

    return total;
}

module.exports = calcularCustoReceita;