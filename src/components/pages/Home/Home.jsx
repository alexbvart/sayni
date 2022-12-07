import ItemCard from "../../molecules/ItemCard/ItemCard"
import ItemListContainer from "../../organisms/ItemListContainer"
import products from '../../../mooks/products'

function Home() {
  console.log(products)
    return (
      <>


        <ItemListContainer>
          {
            products.map((item)=>(
              <ItemCard key={item.name} price={item.price} name={item.name} img={item.default_image} />
            ))
          }
        </ItemListContainer> 
      </>
  )
}

export default Home
