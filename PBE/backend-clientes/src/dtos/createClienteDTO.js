export function createClientDTO(data) {
    const {nome, email, idade} = data;

    // Validação de entrada e formato
    if (typeof nome !== "string" || nome.trimEnd() === "") {
        throw new Error("Campo 'nome' é obrigatório!");
    }

    // let a = 10;
    // if (a == '10') {
    //     // Verdadeiro
    // }
    // if (a === '10') {
    //     // False, pois compara o tipo
    // }

    if (typeof email !== "string" || !email.includes("@")) {
        throw new Error("Campo 'e-mail' é inválido!");
    }
    if (typeof idade !== "number" || !Number.isNaN(idade)) {
        throw new Error("Campo 'idade' é inválido!");
    }

    return {
        nome: nome.trim,
        email: email.trim().toLowerCase(),
        idade
    }
}