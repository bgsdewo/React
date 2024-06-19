import './App.css'
import Article from './components/Article'
function App() {
  return (
      <div className="App">
        <Article name="Bagus" titles={["HTML","React JS","CSS"]}/>
        <br />
        <Article name="Lala" titles={["Node JS","Vue JS","CSS"]}/>

        {/* <Article name="Bagus" /> */}
      </div>
  )
}

export default App
