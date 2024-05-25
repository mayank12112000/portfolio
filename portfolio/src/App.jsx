import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Contact from "./components/contact/Contact"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/Testimonials/Testimonials"
import Work from './components/work/Work'
import "./App.css"
function App() {

  return (
    <siv className="app">
    <Topbar/>
    <div className="sections">asdfas
    <Intro/>
    <Portfolio/>
    <Work/>
    <Testimonials/>
    <Contact/>
    </div>

    </siv>
  )
}

export default App
