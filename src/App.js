import {router} from "./routes/index";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return(
    <RouterProvider router={ router }></RouterProvider>
  )
}