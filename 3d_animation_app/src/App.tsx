import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThreeScene from './components/ThreeScene'
import './App.css'

function App() {

  // main component
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <ThreeScene />
      </div>
      <h1>3D Animation Test App</h1>
    </>
  )
}

export default App