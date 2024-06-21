import './App.css'
import Home from './pages'
import { GlobalContext } from './context'
function App() {
  const user = {
    username: 'Bagus'
  }
  const value = 'bagus'
  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <Home />
        </GlobalContext.Provider> 
      </div>
  )
}

export default App
