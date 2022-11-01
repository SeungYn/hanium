import { createRef, useCallback } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ChatPage from './pages/ChatPage/ChatPage';
import FirstPage from './pages/firstPage/FirstPage';
import Root from './pages/Root';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [],
//   },
// ]);

function App({ authService, groupService, chatService }) {
  const routes = [
    {
      path: '/group',
      name: '그룹',
      index: true,
      element: (
        <FirstPage authService={authService} groupService={groupService} />
      ),
      nodeRef: createRef(),
    },
    {
      path: '/myGroup',
      name: '내 그룹',
      index: true,
      element: <FirstPage authService={authService} />,
      nodeRef: createRef(),
    },
    {
      path: '/chat',
      name: '채팅',
      index: true,
      element: <ChatPage chatService={chatService} />,
      nodeRef: createRef(),
    },
  ];
  const router = useCallback(
    createBrowserRouter(
      [
        {
          path: '/',
          element: <Root routes={routes} />,
          children: routes.map((route) => ({
            path: route.path,
            index: route.path === '/',
            path: route.path,
            element: route.element,
          })),
        },
      ],
      { basename: '123' }
    ),
    [authService]
  );
  return <RouterProvider router={router} />;
}

export default App;
