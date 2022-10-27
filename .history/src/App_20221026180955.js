import { useCallback } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import FirstPage from './pages/firstPage/FirstPage';
import Root from './pages/Root';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [],
//   },
// ]);

function App({ authService }) {
  const router = useCallback(
    createBrowserRouter([
      {
        path: '/',
        element: <Root />,
        children: [
          { index: true, element: <FirstPage authService={authService} /> },
        ],
      },
    ]),
    [authService]
  );
  return <RouterProvider router={router} />;
}

export default App;
