import styled from 'styled-components'
import { Header } from './components/Header';
import { GlobalStyle } from './styles/globals';
import {Dashboard} from './components/Dashboard'

const Title = styled.h1`
color: #8257e6;
`

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

