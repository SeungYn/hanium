import { createRef, useCallback } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ChatPage from './pages/ChatPage/ChatPage';
import FirstPage from './pages/firstPage/FirstPage';
import GroupSearchPage from './pages/GroupSearchPage/GroupSearchPage';
import Root from './pages/Root';
import TradePage from './pages/TradePage/TradePage';

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
        <FirstPage
          authService={authService}
          groupService={groupService}
          title={'그룹'}
        />
      ),
      nodeRef: createRef(),
    },
    {
      path: '/myGroup',
      name: '내 그룹',
      index: console.log(123),
      element: <FirstPage authService={authService} title={'내 그룹'} />,
      nodeRef: createRef(),
    },
    {
      path: '/chat',
      name: '채팅',
      index: true,
      element: (
        <ChatPage
          chatService={chatService}
          title={'채팅'}
          groupService={groupService}
        />
      ),
      nodeRef: createRef(),
    },
    {
      path: '/searchGroup',
      name: '그룹검색',
      index: true,
      element: <GroupSearchPage groupService={groupService} />,
      nodeRef: createRef(),
    },
    {
      path: '/trade/sale',
      name: '장터',
      index: true,
      element: <TradePage type='sale' />,
      nodeRef: createRef(),
    },
    {
      path: '/trade/buy',
      name: '장터',
      index: true,
      element: <TradePage />,
      nodeRef: createRef(),
    },
    {
      path: '/trade/all',
      name: '장터',
      index: true,
      element: <TradePage />,
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
      ]
      //{ basename: '/asd' }
    ),
    [authService]
  );
  return <RouterProvider router={router} />;
}

export default App;
