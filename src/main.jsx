
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import "./index.css"
import "./normalize.css"
import { CartProvider } from './context/CartContext/CartContext'
import { UserProvider } from './context/UserContext/UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </UserProvider>
)
