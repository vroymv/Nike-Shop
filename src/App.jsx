import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Errorpage from './routes/Errorpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Errorpage/>
  }
])



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
