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

  // console.log({ pokemonData })

  return (
    <div className='container-profile'>
      <main className='content'>
        <header>
          <h1>{pokemonData?.name}</h1>
          <h1>#{pokemonData?.order}</h1>
        </header>
        <div>
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
                  {stat?.stat?.name} - {stat?.base_stat}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <p>
        <Link to='/'>Voltar</Link>
      </p>
    </div>
  )
}

export default Profile
