import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './styles.scss'

const Profile = () => {
  const { name }: any = useParams()

  const [pokemonData, setPokemonData] = useState<any>()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await response.json()
      setPokemonData(data)
    }

    getData()
  }, [name])

  return (
    <div className='container-profile'>
      <header>
        <div className='header'>
          <p>
            <Link to='/'>Voltar</Link>
          </p>
          <h1>{pokemonData?.name}</h1>
          <h1>#{pokemonData?.order}</h1>
        </div>
      </header>
      <main className='content'>
        <div className='types'>
          <ul>
            {pokemonData?.types?.map((type: any) => (
              <li>{type.type.name}</li>
            ))}
          </ul>
        </div>
        <section>
          <div className='fotos'>
            <img src={pokemonData?.sprites.front_default} alt={pokemonData?.name} />
          </div>
          <div className='starts'>
            <ul>
              {pokemonData?.stats?.map((stat: any) => (
                <li>
                  <div className='stat'>{stat?.stat?.name}</div>
                  <div className='value'>{stat?.base_stat}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Profile
