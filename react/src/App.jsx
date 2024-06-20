import './App.css'
import Home from './pages'
function App() {
  const value = true
  return (
    <div className="App">
        {value ? 'benar' :'salah'}
        <Home />
      </div>
  )
}

export default App
