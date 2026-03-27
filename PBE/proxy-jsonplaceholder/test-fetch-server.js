async function main() {
    const resp = await fetch("http://localhost:3001/api/posts");
    const json = await resp.json();

    if (Array.isArray(json)) {
        console.log("É Array")
    }
    else {
        console.log("É objeto")
    }
}

main();