import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contatos'

type TagProps = {
  categoria?: enums.Categoria
}

function retornaCorDeFundo(props: TagProps): string {
  if ('categoria' in props) {
    if (props.categoria === enums.Categoria.TRABALHO) return variaveis.amarelo
    if (props.categoria === enums.Categoria.FAMILIA) return variaveis.azul
    if (props.categoria === enums.Categoria.AMIGOS) return variaveis.roxo
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Nome = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoCancelarExcluir = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
