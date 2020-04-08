import React, { useState, useEffect } from 'react';

const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [busqueda, setBusqueda] = useState('pikachu');

  const handleChange = e => {
    setBusqueda(e.target.value);
  };

  useEffect(() => {
    console.log('se ejecuta useeffect');
    fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, [busqueda]);

  console.log(pokemon);

  return (
    <div className="main">
      <div className="card">
        {pokemon && pokemon.name && (
          <>
            <img alt={pokemon.name} src={pokemon.sprites.front_default} />
            <p>Nombre: {pokemon.name}</p>
            <p>Tipo: {pokemon.types.map(type => type.type.name)}</p>
          </>
        )}
      </div>
      <form>
        <input value={busqueda} onChange={handleChange} />
        <input type="submit" value="Buscar pokemon" />
      </form>
    </div>
  );
};

export default App;
