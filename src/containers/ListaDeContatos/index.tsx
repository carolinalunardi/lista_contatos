import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Nome } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'categoria') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.categoria === valor
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "${`${criterio}=${valor}`}" ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <MainContainer>
      <Nome as="p">{mensagem}</Nome>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              nome={c.nome}
              categoria={c.categoria}
              telefone={c.telefone}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
