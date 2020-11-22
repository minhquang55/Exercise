const pokemons = [
  { id: 1, name: 'Charmander', hp: 39, atk: 52 },
  { id: 2, name: 'Pikachu', hp: 35, atk: 55 },
  { id: 3, name: 'Squirtle', hp: 44, atk: 48 },
  { id: 4, name: 'Bulbasaur', hp: 45, atk: 49 },

  { id: 5, name: 'Mew', hp: 100, atk: 100 },
  { id: 6, name: 'Pidgey', hp: 40, atk: 45 },
  { id: 7, name: 'Abra', hp: 25, atk: 20 },
  { id: 8, name: 'Snorlax', hp: 160, atk: 110 },

  { id: 9, name: 'Caterpie', hp: 45, atk: 30 },
  { id: 10, name: 'Dratini', hp: 41, atk: 64 },
  { id: 11, name: 'Eevee', hp: 55, atk: 55 },
  { id: 12, name: 'Jigglypuff', hp: 115, atk: 45 }
]

const newPokemons = [...pokemons];

const selectedPokemons = [];

const renderListPokemon = () => {
  const pokemonsList = document.querySelector('.pokemons');
  for (let i = 0; i < newPokemons.length; i++) {
    const divPokemon = document.createElement('div');
    divPokemon.setAttribute('id', 'pokemon' + newPokemons[i].id);
    const imgPokemon = document.createElement('img');
    imgPokemon.style.cursor = 'pointer';
    const stringSrc = '\image' + '\\' + newPokemons[i].name + '.png';
    newPokemons[i].src = stringSrc;
    newPokemons[i].status = 'none';
    imgPokemon.setAttribute('src', stringSrc);

    imgPokemon.addEventListener('click', function handleBorder () {
      if (newPokemons[i].status != 'selected') newPokemons[i].status = 'selecting';
      else return;
      imgPokemon.style.border = '1px solid rgb(250 212 227)';
      for (let j = 0; j < newPokemons.length; j++) {
        const img = document.querySelector('#pokemon' + newPokemons[j].id + ' > img');
        if (newPokemons[j].status == 'selected') {
          img.style.border = 'none';
          img.style.cursor = 'default';
          const btn = document.querySelector('button');
          btn.disabled = true;
          btn.style.backgroundColor = '#CCCCCC';
          btn.style.color = '#A6A6A6';
        }
        else if (j != i) {
          img.style.border = 'none';
          const btn = document.querySelector('button');
          btn.disabled = false;
          newPokemons[j].status = 'none';
          btn.style.backgroundColor = '#1BBC9B';
          btn.style.color = 'white';
        }
      }
      showInformation(newPokemons[i]);
    });

    divPokemon.appendChild(imgPokemon);
    pokemonsList.appendChild(divPokemon);
  }
}

const handleAddPokemon = () => {
  for (let i = 0; i < newPokemons.length; i++) {
    if (newPokemons[i].status == 'selecting') {
      newPokemons[i].status = 'selected';
      selectedPokemons.push(newPokemons[i]);
      const img = document.querySelector('#pokemon' + newPokemons[i].id + ' > img');
      img.style.border = 'none';
      img.style.opacity = '0.5';
      const btn = document.querySelector('button');
      btn.disabled = true;
      btn.style.backgroundColor = '#CCCCCC';
      btn.style.color = '#A6A6A6';
    }
  }
}

const showInformation = pokemon => {
  document.querySelector('.pokemon-image').setAttribute('src', pokemon.src);
  document.querySelector('.pokemon-name').innerHTML = pokemon.name;
  document.querySelector('.pokemon-hp').innerHTML = pokemon.hp;
  document.querySelector('.pokemon-atk').innerHTML = pokemon.atk;
  document.querySelector('.progress-percent-hp').style.width = 'calc((' + pokemon.hp + '/ 200) * 100%)';
  document.querySelector('.progress-percent-atk').style.width = 'calc((' + pokemon.atk + '/ 200) * 100%)';
}

const showEditForm = () => {
  const content = document.querySelector('.content span');
  content.style.display = 'none';
  const smallContent = document.querySelector('.content span:nth-child(2)');
  smallContent.style.display = 'none';
  const input = document.querySelector('.content-edit-form');
  input.style.display = 'block';
  input.value = content.innerText;
}

const submitChangeContent = (event) => {
  if (event.key === 'Enter') {
    const input = document.querySelector('.content-edit-form');
    input.style.display = 'none';
    const content = document.querySelector('.content span');
    content.innerHTML = input.value;
    content.style.display = 'inline';
  }
}

renderListPokemon();


