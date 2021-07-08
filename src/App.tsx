import { Header } from './components/Header';
import { GlobalStyle } from './styles/globals';
import {Dashboard} from './components/Dashboard'



export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

