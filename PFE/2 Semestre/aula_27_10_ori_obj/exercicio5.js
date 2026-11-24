class Musica {
  constructor(titulo, artista, album, duracao) {
    this.titulo = titulo;
    this.artista = artista;
    this.album = album;
    this.duracao = duracao;
  }

  tocar() {
    console.log(`Tocando música: ${this.titulo}, Artista: ${this.artista}, Álbum: ${this.album}, Duração: ${this.duracao}`);
  }
}

let musica1 = new Musica("Bohemian Rhapsody", "Queen", "A Night at the Opera", "5:55");
let musica2 = new Musica("Imagine", "John Lennon", "Imagine", "3:04");
let musica3 = new Musica("Hotel California", "Eagles", "Hotel California", "6:30");

let musicaProcurada = "Imagine";

if (musicaProcurada === musica1.titulo) {
  musica1.tocar();
} else if (musicaProcurada === musica2.titulo) {
  musica2.tocar();
} else if (musicaProcurada === musica3.titulo) {
  musica3.tocar();
} else {
  console.log("Música não localizada");
}