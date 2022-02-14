import { Link } from 'react-router-dom'

import './styles.scss'

const PokemonCard = ({ pokemon, ...rest }: any) => {
  return (
    <div className='content' {...rest}>
      <Link to={`/pokemon/${pokemon.name}`}>
        <div key={pokemon.name} className='item'>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
        </div>
      </Link>
    </div>
  )
}

export default PokemonCard
