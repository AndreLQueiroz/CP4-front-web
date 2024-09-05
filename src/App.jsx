import Footer from './components/Footer'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import { AppStyle } from './css/AppStyle'

function App() {
 

  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    <AppStyle/>
      
    </>
  )
}

export default App
