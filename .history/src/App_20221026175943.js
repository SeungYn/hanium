import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './pages/Root';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [],
//   },
// ]);

function App({ authService }) {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [],
    },
  ]);
  return <RouterProvider router={router} a={'a'} />;
}

export default App;
