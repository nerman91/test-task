import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Advantages from './pages/Advantages';
import Main from './pages/Main';
import TabsContextProvider from './Context/TabsContext';
import CursorCircle from './components/CursorCurcle';
import 'normalize.css';
import './index.css';
import { createRef } from 'react';

const routes = [
  {
    path: '/',
    element: <Main />,
    nodeRef: createRef(),
    name: 'Main',
  },
  {
    path: '/about',
    element: <About />,
    nodeRef: createRef(),
    name: 'About',
  },
  {
    path: '/advantages',
    element: <Advantages />,
    nodeRef: createRef(),
    name: 'Advantages',
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <TabsContextProvider>
      <CursorCircle />
      <RouterProvider router={router} />
    </TabsContextProvider>
  );
}

export default App;
