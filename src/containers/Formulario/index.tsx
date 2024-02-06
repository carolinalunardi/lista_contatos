import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Nome } from '../../styles'
import { Infos } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Contatos'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.AMIGOS)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(
      nome,
      categoria,
      telefone,
      email,
      9
    )

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Nome>Novo contato</Nome>
      <Form onSubmit={cadastrarContato}>
        <Infos
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome e sobrenome"
        />
        <Infos
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="number"
          placeholder="Telefone"
        />
        <Infos
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <Opcoes>
          <p>Escolha a categoria:</p>

          {Object.values(enums.Categoria).map((categoria) => (
            <Opcao key={categoria}>
              <input
                value={categoria}
                name="categoria"
                type="radio"
                onChange={(evento) =>
                  setCategoria(evento.target.value as enums.Categoria)
                }
                id={categoria}
                defaultChecked={categoria === enums.Categoria.AMIGOS}
              />
              <label htmlFor={categoria}>{categoria}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
