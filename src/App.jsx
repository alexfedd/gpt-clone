import { RouterProvider } from "react-router-dom"
import { router } from "./setup/react-router-dom"
import './App.scss'
function App() {

  return <RouterProvider router={router} />
}

export default App
