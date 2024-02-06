import styled, { createGlobalStyle } from 'styled-components'
import { Botao } from '../components/Contato/styles'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Nome = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`
export const Infos = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  margin: 16px 0;
  display: block;
  padding: 2px;
  border: none;
  width: 100%;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
