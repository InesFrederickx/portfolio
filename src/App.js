import './App.css';
import Nav from './components/nav/nav.js';
import Home from './components/home/home.js'
import About from './components/about/about.js'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;