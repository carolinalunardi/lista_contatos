import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as enums from '../../utils/enums/Contatos'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Categoria.TRABALHO}
            criterio="categoria"
            legenda="trabalho"
          />
          <FiltroCard
            valor={enums.Categoria.FAMILIA}
            criterio="categoria"
            legenda="família"
          />
          <FiltroCard
            valor={enums.Categoria.AMIGOS}
            criterio="categoria"
            legenda="amigos"
          />
          <FiltroCard criterio="todas" legenda="todos" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
