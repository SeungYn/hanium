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

function App({ authService, groupService }) {
  const routes = [
    {
      path: '/',
      name: '그룹',
      index: true,
      element: <FirstPage authService={authService} />,
    },
  ];
  const router = useCallback(
    createBrowserRouter([
      {
        path: '/',
        element: <Root routes={routes} />,
        children: [
          { index: true, element: <FirstPage authService={authService}, groupService/> },
        ],
      },
    ]),
    [authService]
  );
  return <RouterProvider router={router} />;
}

export default App;
