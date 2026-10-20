import Database from "better-sqlite3";

const db = new Database("app/db/escola.db");

db.pragma("foreign_keys = ON"); // Ativando chave estrangeira

db.exec(`
    CREATE TABLE IF NOT EXISTS alunos (
        id_aluno INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        idade INTEGER NOT NULL,
        serie TEXT NOT NULL,
        ra TEXT NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS notas (
        id_notas INTEGER PRIMARY KEY AUTOINCREMENT,
        aluno_id INTEGER NOT NULL,
        t1 REAL NOT NULL,
        t2 REAL NOT NULL,
        n1 REAL NOT NULL,
        n2 REAL NOT NULL,
        n3 REAL NOT NULL,
        FOREIGN KEY (aluno_id)
        REFERENCES alunos(id_aluno)
        ON DELETE CASCADE
    );
`);

// Tenta adicionar a coluna n3 caso o banco já tenha sido criado sem ela previamente
try {
    db.exec(`ALTER TABLE notas ADD COLUMN n3 REAL NOT NULL DEFAULT 0;`);
} catch (error) {
    // Se a coluna n3 já existir no arquivo do banco, o SQLite lança um erro que ignoramos aqui
}

console.log('Banco atualizado com sucesso!');

export default db;