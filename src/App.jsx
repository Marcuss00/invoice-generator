import { 
        Route,
        createBrowserRouter,
        createRoutesFromElements,
        RouterProvider
 } from "react-router-dom";
import Invoice from "./component/Invoice"
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" element={<MainLayout/>}>
        <Route index element={<Invoice />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<NotFound />} />
       </Route>
    ))
  
  return (

        <RouterProvider router={router} />
  )
  

}

export default App