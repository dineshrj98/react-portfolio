import Home from "./Home"
import Repo from "./components/Projects/Github/Repo/Repo"
import Post from "./components/Projects/Github/Repo/Post"
import Github from "./components/Projects/Github/GitHub"
import SearchEngine from "./components/Search/SearchEngine"
import ErrorPage from "./components/ErrorBoundary/ErrorPage"
import Page from "./components/Page404/Page"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import './App.css'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <> 
    <Routes>
      <Route path='/react-portfolio' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/experiernce' element={<Experience />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contacts' element={<Contact />} />
      <Route path='/github' element={<Github />} />
      <Route path='/repo' element={<Repo />} />
      <Route path="/repo/:repoName" element={<Post />} />
      <Route/>
      <Route path="/recipesearch" element={<SearchEngine />} />
      <Route/>
      <Route path="/error" element={<ErrorPage />} />
      <Route path='/*' element={<Page />} />
    </Routes>

    </>
  )
}

export default App

