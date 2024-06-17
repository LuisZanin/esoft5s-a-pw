import React from "react";
import styles from "./header.module.css";
import CardSection from "../card-section/card.js";

const theHeader = ({ title }) => {
  return (
    <body>
      <header className={styles.header}>
        <h1>{title}</h1>
      </header>
      <div>
        <CardSection titulo={"Informações sobre Squirtle"}>
          <div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
              alt="Squirtle 1"
            />
            <img
              src="https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png"
              alt="Squirtle 2"
            />
          </div>
          <p>
            Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de
            Kanto e evolui para Wartortle.
          </p>
        </CardSection>
        <CardSection titulo={"Características"}>
          <p>
            Squirtle é conhecido por sua concha nas costas, que oferece proteção
            adicional. Ele possui ataques de água poderosos, como Water Gun e
            Hydro Pump.
          </p>
        </CardSection>
        <CardSection titulo={"Curiosidades"}>
          <ul>
            <li>Squirtle é um dos Pokémon mais populares e adoráveis.</li>
            <li>
              Seu nome deriva das palavras "squirrel" (esquilo) e "turtle"
              (tartaruga).
            </li>
            <li>
              Squirtle é frequentemente escolhido por treinadores para começar
              sua jornada Pokémon.
            </li>
          </ul>
        </CardSection>
        <CardSection titulo={"Recursos adicionais"}>
          <ul>
            <li>
              <a
                href="https://www.pokemon.com/br/pokedex/squirtle"
                target="_blank"
              >
                Pokédex - Squirtle
              </a>
            </li>
            <li>
              <a
                href="https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)"
                target="_blank"
              >
                Bulbapedia - Squirtle
              </a>
            </li>
          </ul>
        </CardSection>
      </div>
    </body>
  );
};

export default theHeader;
