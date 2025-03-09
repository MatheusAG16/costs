import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Project from './components/pages/Project'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/contato" element={<Contato />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/company" element={<Company />} />

            <Route path="/newproject" element={<NewProject />} />

            <Route path="project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
