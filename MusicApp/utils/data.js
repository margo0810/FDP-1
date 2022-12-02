let users = [];
let favoritos = [];

/*
import { getSong } from "https://cdn.skypack.dev/genius-lyrics-api";

const options = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXX",
  title: "Blinding Lights",
  artist: "The Weeknd",
  optimizeQuery: true,
};

getSong(options).then((song) =>
  console.log(`
    ${song.id}
    ${song.title}
    ${song.url}
    ${song.albumArt}
    ${song.lyrics}`)
);
*/

const fetchData = async () => {
  const url = "https://adventure-time-api.herokuapp.com/api/v1/characters";
  // Get the list from the api
  const data = await fetch(url);
  // Convert to json
  const dataJson = await data.json();
  var cards = [];
  dataJson.forEach((element) => {
    const card = {
      id: element.id,
      fav: true,
      image: "imagenes/" + element.id + ".jpg",
      image2: "imagenes/" + element.id + ".jpg",
      image3: "imagenes/" + element.id + ".jpg",
      nombre: element.fullName,
      description: element.quotes[0],
    };
    cards.push(card);
  });
  cards.forEach((card, index) => {
    if (index < 3) {
      divtanda1.innerHTML += `<a href="personaje.html?id=${card.id}"> <div class="reborde1"> <img src=${card.image} height="198px" width="325px"></div> </a>`;
      tanda1.appendChild(divtanda1);
    } else if (index > 3 && index < 7) {
      divtanda2.innerHTML += `<a href="personaje.html?id=${card.id}"> <div class="reborde1"> <img src=${card.image} height="198px" width="325px"></div> </a>`;
      tanda2.appendChild(divtanda2);
    }
  });
};
