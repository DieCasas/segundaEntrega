import NavBar from './components/NavBar'
import Header from './components/Header'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
    
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route exact path="/category/:category" element={<ItemListContainer />}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
