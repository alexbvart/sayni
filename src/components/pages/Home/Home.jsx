import ItemCard from "../../molecules/ItemCard/ItemCard"
import ItemListContainer from "../../organisms/ItemListContainer"
// import products from '../../../mooks/products'
import { SayniLoader } from "../../atoms/Loader/SayniLoader"
import { useProducts } from "../../../hooks/useProducts"

function Home() {
  const { products, error, loading } = useProducts();
  return (
    <>
      {loading && <SayniLoader />}
      {(!loading && !error) &&
        <>
          <h1>Best Seller</h1>
          <ItemListContainer>
            {
              products.map((item) => (
                <ItemCard key={`product_${item.id}`} price={item.price} name={item.name} img={item.default_image} id={item.id} />
              ))
            }
          </ItemListContainer>
        </>}
      {(!loading && error) &&
        <p>we have no products available</p>
      }
    </>
  )
}

export default Home
