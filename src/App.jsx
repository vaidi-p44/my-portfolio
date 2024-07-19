import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/About'
import Services from './components/services/services'
import Mywork from './components/my work/mywork'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
function App() {

  return (
    <>
     <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Mywork></Mywork>
      <Contact></Contact>
      <Footer></Footer>
     </div>
    </>
  )
}

export default App

