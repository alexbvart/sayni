import ItemCard from "../../molecules/ItemCard/ItemCard"
import ItemListContainer from "../../organisms/ItemListContainer"
import products from '../../../mooks/products'

function Home() {

    return (
      <>
        <h1>Best Seller</h1>

        <ItemListContainer>
          {
            products.map((item)=>(
              <ItemCard key={`product_${item.id}`} price={item.price} name={item.name} img={item.default_image} id={item.id} />
            ))
          }
        </ItemListContainer> 
      </>
  )
}

export default Home
