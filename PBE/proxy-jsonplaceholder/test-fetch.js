async function main() {
    const resp = await fetch("https://dummyjson.com/posts");
    const json = await resp.json();

    // console.log("Quantidade de posts:", json.posts.length);
    // console.log(json.posts[15]);
    console.log(json.posts[15].title);
}

main();