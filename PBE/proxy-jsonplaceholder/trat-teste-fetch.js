async function main() {
    try {
        const resp = await fetch("http://localhost:3001/api/post",{
            signal: AbortSignal.timeout(5000) // 5 segundos
        });

        if (!resp.ok) {
            // Se falhar ao ler, usa uma string vazia
            const body = await resp.text().catch(() => "")
            throw new error(`HTTP ${resp.status} ${resp.statusText} | ${body}`)
        }

        // COnverte para json
        const json = await resp.json();

        console.log("Count: ",json.data.posts.length);
    }
    catch (erro) {

    }
}

main();