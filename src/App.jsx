import NavBar from './components/NavBar'
import Header from './components/Header'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import CardList from './components/CardList/CardList'

function App() {
  return (
    <ChakraProvider>
      <Header />
      <NavBar />
      <CardList/>
    </ChakraProvider>
  )
}

export default App
