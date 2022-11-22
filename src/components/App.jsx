
import NavBar from "./organisms/NavBar/NavBar"
import "../index.css"
import ItemListContainer from "./organisms/NavBar/ItemListContainer"
function App() {
    return (
      <>
        <NavBar />
        <ItemListContainer greeting="greeting"/>
      </>
  )
}

export default App
