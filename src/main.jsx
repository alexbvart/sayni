
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import "./index.css"
import "./normalize.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
