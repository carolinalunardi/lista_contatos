import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contatos'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'categoria' | 'todas'
  valor?: enums.Categoria
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'todas') return contatos.itens.length
    if (criterio === 'categoria') {
      return contatos.itens.filter((item) => item.categoria === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
