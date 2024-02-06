import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contatos'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Maria Silva',
      categoria: enums.Categoria.TRABALHO,
      telefone: '99999999',
      email: 'maria@email.com.br'
    },
    {
      id: 2,
      nome: 'João Ferradura',
      categoria: enums.Categoria.FAMILIA,
      telefone: '99999999',
      email: 'joao@email.com.br'
    },
    {
      id: 3,
      nome: 'Alice Maravilha',
      categoria: enums.Categoria.AMIGOS,
      telefone: '99999999',
      email: 'alice@email.com.br'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato cadastrado com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
