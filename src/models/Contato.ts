import * as enums from '../utils/enums/Contatos'

class Contato {
  nome: string
  categoria: enums.Categoria
  telefone: string
  email: string
  id: number

  constructor(
    nome: string,
    categoria: enums.Categoria,
    telefone: string,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.categoria = categoria
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}

export default Contato
