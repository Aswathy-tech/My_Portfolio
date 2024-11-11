import styles from './App.module.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  

  return (
    <>
    <div className={styles.App}>
  
      <Navbar />
      
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    
    </div>
      
       
    </>
  )
}

export default App
