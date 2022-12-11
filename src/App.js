import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/routes';
import 'react-slideshow-image/dist/styles.css';

function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
