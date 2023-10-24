import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  )
}

export default App
