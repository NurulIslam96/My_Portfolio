import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import "react-slideshow-image/dist/styles.css";
import { Particle } from "./components/Particle";

function App() {
  return (
    <>
      <Particle></Particle>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
