import { useEffect, useState } from 'react'

const Main = () => {
  const [pokemonList, setPokemonList] = useState<Array<any>>([])
  const [nextPage, setNextPage] = useState<any>('https://pokeapi.co/api/v2/pokemon-form/')

  const getAllPokemons = async () => {
    const response = await fetch(nextPage)
    const data = await response.json()
    const { next, results } = data

    setNextPage(next)
    createObjectPokemon(results)
  }

  const createObjectPokemon = (result: any) => {
    result.map(async (pokemon: any) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemon.name}`)
      const data = await res.json()
      const { name, sprites } = data

      setPokemonList(currentList => [...currentList, { name, sprites }])
    })
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  const loadingMore = async () => {
    console.log('click')
    const response = await fetch(nextPage)
    const data = await response.json()
    const { next, results } = data

    setNextPage(next)
    createObjectPokemon(results)
  }

  return (
    <>
      <h1>PokeDex - Main</h1>
      {pokemonList?.map((pokemon: any) => (
        <div key={pokemon.name}>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ))}

      <button onClick={loadingMore}>next</button>
    </>
  )
}

export default Main
