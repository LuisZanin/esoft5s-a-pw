function changePageTitle(title) {
  document.title = title
}

function generateInfoSection(src, pokemonName) {
  const h2 = document.createElement('h2')
  h2.id = "info-pokemon-label"
  h2.textContent = `Informações sobre ${pokemonName}`

  const img = document.querySelector('img')
  img.src = src
  img.alt = `Imagem do pokemon ${pokemonName}`

  const section = document.querySelector('#info-pokemon')

  section.appendChild(h2)
  section.appendChild(img)
}



async function getPokemonData(name) {
  // fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  //   .then((fetchData) => {
  //     return fetchData.json()
  //   })
  //   .then((jsonData) => generateInfoSection(jsonData.sprites.front_default, name))
  //   .catch((error) => console.error(error))

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const jsonData = await response.json();

    let currentId = 0;

    const spriteArray = Object.values(jsonData.sprites).filter((spriteUrl) => typeof spriteUrl === 'string');

    const imageElement = document.querySelector('#info-pokemon img');

    if (spriteArray.length > 0) {
      imageElement.src = spriteArray[currentId];
    }

    function MudarAoClick() {
      currentId = (currentId + 1) % spriteArray.length;
      imageElement.src = spriteArray[currentId];
    }
    
    generateInfoSection(jsonData.sprites.front_default, name)

    imageElement.addEventListener('click', MudarAoClick);

  } catch (error) {
    console.error(error)
  }
}



function getSearchParams() {
  // Early return -> Caso location search, não faz nada.
  if (!location.search) {
    return
  }

  // URLSearchParams é uma classe que facilita a manipulação de query strings
  const urlSearchParams = new URLSearchParams(location.search)

  // Pegando o valor do parâmetro name
  const pokemonName = urlSearchParams.get('name')

  changePageTitle(`Pagina do ${pokemonName}`)
  getPokemonData(pokemonName)
}

document.addEventListener('DOMContentLoaded', function () {
  getSearchParams()
})




//Data Ultimo Acesso e contador

document.addEventListener("DOMContentLoaded", function() {
  let contador = localStorage.getItem("contador");
  if (contador === null) {
    contador = 0;
  } else {
    contador = parseInt(contador, 10);
  }

  contador += 1;

  localStorage.setItem("contador", contador);

  let dataAcesso = new Date()

  let dataUltimoAcesso = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short"
  }).format(dataAcesso)

  localStorage.setItem("dataUltimoAcesso", JSON.stringify(dataUltimoAcesso))

  if (dataUltimoAcesso !== null) {

      function generateFooterSection() {
          const data = document.createElement('a');
          data.id = "info-footer-lastVisit";

          data.textContent = `Esta página foi visitada ${contador} vezes. A última visita foi: ${dataUltimoAcesso}`;

          const section = document.querySelector('#footer-lastVisit');

          if (section !== null) {
              section.appendChild(data);
          }
      }

      generateFooterSection();
  }
});





