import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Gallery />
        <Contact />
      </main>
    </>
  )
}

export default App
