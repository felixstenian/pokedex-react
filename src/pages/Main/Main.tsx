import { useEffect, useState } from 'react'

import { PokemonCard } from '../../components'

import './styles.scss'

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

  return (
    <div className='container-main'>
      <header>
        <h1>PokeDex</h1>
      </header>
      <div className='content'>
        {pokemonList?.map((pokemon: any) => (
          <PokemonCard pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>

      <button onClick={getAllPokemons}>Ver mais</button>
    </div>
  )
}

export default Main
