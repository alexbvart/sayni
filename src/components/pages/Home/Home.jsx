import ItemCard from "../../molecules/ItemCard/ItemCard"
import ItemListContainer from "../../organisms/ItemListContainer"

function Home() {
    return (
      <>
        {/* <NavBar />*/}
        <ItemListContainer>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </ItemListContainer> 
      </>
  )
}

export default Home
