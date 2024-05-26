document.addEventListener("DOMContentLoaded", function () {
  // Função para criar um elemento de texto
  function createTextElement(textContent) {
    return document.createTextNode(textContent);
  }

  // Função para criar o header
  function createHeader() {
    const header = document.querySelector("header");
    const headerTitle = document.createElement("h1");
    headerTitle.appendChild(createTextElement("Squirtle"));
    header.appendChild(headerTitle);
  }

  // Função para criar a navegação
  function createNavigation() {
    const nav = document.querySelector("nav");
    const navList = document.createElement("ul");

    const links = [
      { href: "#info-squirtle", text: "Informações sobre Squirtle" },
      { href: "#caracteristicas", text: "Características" },
      { href: "#curiosidades", text: "Curiosidades" },
      { href: "#artigo-squirtle", text: "Artigo sobre Squirtle" },
      { href: "#recurso", text: "Recursos Adicionais" },
      { href: "#evolucao", text: "Evoluções" }
    ];

    links.forEach(link => {
      const li = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.appendChild(createTextElement(link.text));
      li.appendChild(anchor);
      navList.appendChild(li);
    });

    nav.appendChild(navList);
  }

  // Função para criar a seção de informações sobre Squirtle
  function createInfoSection() {
    const main = document.querySelector("main");

    const infoSection = document.createElement("section");
    infoSection.id = "info-squirtle";

    const infoTitle = document.createElement("h2");
    infoTitle.appendChild(createTextElement("Informações sobre Squirtle"));
    infoSection.appendChild(infoTitle);

    const infoDiv = document.createElement("div");
    const squirtleImage1 = document.createElement("img");
    squirtleImage1.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png";
    squirtleImage1.alt = "Squirtle";
    infoDiv.appendChild(squirtleImage1);

    const squirtleImage2 = document.createElement("img");
    squirtleImage2.src = "https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png";
    squirtleImage2.alt = "Squirtle";
    infoDiv.appendChild(squirtleImage2);
    infoSection.appendChild(infoDiv);

    const infoParagraph1 = document.createElement("p");
    infoParagraph1.appendChild(createTextElement("Squirtle é um Pokémon do tipo água. É o Pokémon inicial da região de Kanto e evolui para Wartortle"));
    infoSection.appendChild(infoParagraph1);

    main.appendChild(infoSection);
  }

  // Função para criar a seção de características
  function createCharacteristicsSection() {
    const main = document.querySelector("main");

    const caracteristicaSection = document.createElement("section");
    caracteristicaSection.id = "caracteristicas";

    const caracteristicaTitle = document.createElement("h2");
    caracteristicaTitle.appendChild(createTextElement("Caracteristicas"));
    caracteristicaSection.appendChild(caracteristicaTitle);

    const caracteristicaDesc = document.createElement("p");
    caracteristicaDesc.appendChild(createTextElement("Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos como Water Gun e Hydro Pump."));

    caracteristicaSection.appendChild(caracteristicaDesc);
    main.appendChild(caracteristicaSection);
  }

  // Função para criar a seção de curiosidades
  function createCuriositiesSection() {
    const main = document.querySelector("main");

    const curiosidadesArticle = document.createElement("article");
    curiosidadesArticle.id = "curiosidades";

    const curiosidadesTitle = document.createElement("h2");
    curiosidadesTitle.appendChild(createTextElement("Curiosidades"));
    curiosidadesArticle.appendChild(curiosidadesTitle);

    const curiosidadesList = document.createElement("ul");

    const curiosidadesItems = [
      "Squirtle é um dos Pokémon mais populares e adoráveis.",
      "Seu nome se deriva da palavra squirrel (esquilo) e turtle (tartaruga).",
      "Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon."
    ];

    curiosidadesItems.forEach(item => {
      const listItem = document.createElement("li");
      listItem.appendChild(createTextElement(item));
      curiosidadesList.appendChild(listItem);
    });

    curiosidadesArticle.appendChild(curiosidadesList);
    main.appendChild(curiosidadesArticle);
  }

  // Função para criar o artigo sobre Squirtle
  function createSquirtleArticle() {
    const main = document.querySelector("main");

    const sobreSquirtleArticle = document.createElement("article");
    sobreSquirtleArticle.id = "artigo-squirtle";

    const sobreSquirtleTitle = document.createElement("h2");
    sobreSquirtleTitle.appendChild(createTextElement("Squirtle: O Amigo Aquático"));
    sobreSquirtleArticle.appendChild(sobreSquirtleTitle);

    const sobreSquirtleList = document.createElement("ul");

    const squirtleParagraphs = [
      "Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.",
      "Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.",
      "Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas."
    ];

    squirtleParagraphs.forEach(paragraph => {
      const paraElement = document.createElement("p");
      paraElement.appendChild(createTextElement(paragraph));
      sobreSquirtleList.appendChild(paraElement);
    });

    sobreSquirtleArticle.appendChild(sobreSquirtleList);
    main.appendChild(sobreSquirtleArticle);
  }

  // Função para criar a seção de recursos adicionais
  function createAdditionalResourcesSection() {
    const main = document.querySelector("main");

    const recursosAddSection = document.createElement("section");
    recursosAddSection.id = "recurso";

    const recursosAddTitle = document.createElement("h2");
    recursosAddTitle.appendChild(createTextElement("Recursos Adicionais"));
    recursosAddSection.appendChild(recursosAddTitle);

    const recursosAddList = document.createElement("ul");

    const recursosAddItems = [
      { href: "https://www.pokemon.com/br/pokedex/squirtle", text: "Pokédex - Squirtle" },
      { href: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)", text: "Bulbapedia - Squirtle" }
    ];

    recursosAddItems.forEach(item => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = item.href;
      anchor.appendChild(createTextElement(item.text));
      listItem.appendChild(anchor);
      recursosAddList.appendChild(listItem);
    });

    recursosAddSection.appendChild(recursosAddList);
    main.appendChild(recursosAddSection);
  }

  // Função para criar a seção de evoluções
  function createEvolutionSection() {
    const main = document.querySelector("main");

    const evolucaoSection = document.createElement("section");
    evolucaoSection.id = "evolucao";

    const evolucaoTitle = document.createElement("h2");
    evolucaoTitle.appendChild(createTextElement("Evoluções"));
    evolucaoSection.appendChild(evolucaoTitle);

    const evolucaoList = document.createElement("ul");

    const evolucoes = [
      { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png", alt: "Squirtle", caption: "1. Squirtle" },
      { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png", alt: "Wartortle", caption: "2. Wartortle" },
      { src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png", alt: "Blastoise", caption: "3. Blastoise" }
    ];

    evolucoes.forEach(evolucao => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = "#";

      const image = document.createElement("img");
      image.src = evolucao.src;
      image.alt = evolucao.alt;

      const caption = document.createElement("figcaption");
      caption.appendChild(createTextElement(evolucao.caption));

      listItem.appendChild(anchor);
      listItem.appendChild(image);
      listItem.appendChild(caption);
      evolucaoList.appendChild(listItem);
    });

    evolucaoSection.appendChild(evolucaoList);
    main.appendChild(evolucaoSection);

    // Impedindo a navegação ao clicar nas evoluções
    const evolutionLinks = document.querySelectorAll("#evolucao a");
    evolutionLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
      });
    });
  }

  // Função para criar o rodapé
  function createFooter() {
    const footer = document.querySelector("footer");

    const footerParagraphs = [
      "© 2024 Página do Pokémon Squirtle. Todos os direitos reservados.",
      "Voltar para o topo",
      { text: "Contato via e-mail", href: "mailto" },
      { text: "Telefone: (55) 5555-5555", href: "tel" }
    ];

    footerParagraphs.forEach(para => {
      const paragraph = document.createElement("p");
      if (typeof para === "string") {
        paragraph.appendChild(createTextElement(para));
      } else {
        const anchor = document.createElement("a");
        anchor.href = para.href;
        anchor.appendChild(createTextElement(para.text));
        paragraph.appendChild(anchor);
      }
      footer.appendChild(paragraph);
    });
  }

  // Chama todas as funções para carregar o conteúdo principal
  createHeader();
  createNavigation();
  createInfoSection();
  createCharacteristicsSection();
  createCuriositiesSection();
  createSquirtleArticle();
  createAdditionalResourcesSection();
  createEvolutionSection();
  createFooter();
});
