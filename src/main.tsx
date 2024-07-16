import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TabsContextProvider from './Context/TabsContext.tsx';
import Main from './pages/Main';
import About from './pages/About';
import CursorCircle from './components/CursorCurcle';
import Advantages from './pages/Advantages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/advantages',
    element: <Advantages />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TabsContextProvider>
    <CursorCircle />
    <RouterProvider router={router} />
  </TabsContextProvider>,
);
