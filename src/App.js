import { createRef, useCallback } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
// import { TradeMaker } from './components/Trade/TradeMaker/TradeMaker';
import ChatPage from './pages/ChatPage/ChatPage';
import FirstPage from './pages/firstPage/FirstPage';
import GroupSearchPage from './pages/GroupSearchPage/GroupSearchPage';
import MyInfo from './pages/MyInfo/MyInfo';
import Root from './pages/Root';
import TradeDetailPage from './pages/TradeDetailPage/TradeDetailPage';
import TradeNoteListPage from './pages/TradeNoteListPage/TradeNoteListPage';
import TradeNotePage from './pages/TradeNotePage/TradeNotePage';
import TradePage from './pages/TradePage/TradePage';
import TradeSearchPage from './pages/TradeSearchPage/TradeSearchPage';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [],
//   },
// ]);

function App({ authService, groupService, chatService, tradeService }) {
  const routes = [
    {
      path: '/',
      name: '그룹',
      index: true,
      element: (
        <FirstPage
          authService={authService}
          groupService={groupService}
          groupDisplay={'all'}
        />
      ),
      nodeRef: createRef(),
    },
    {
      path: '/myGroup',
      name: '내 그룹',
      index: console.log(123),
      element: (
        <FirstPage
          authService={authService}
          groupService={groupService}
          groupDisplay={'my'}
        />
      ),
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
      path: '/trade/trade',
      name: '장터',
      index: true,
      element: <TradePage type='trade' tradeService={tradeService} />,
      nodeRef: createRef(),
    },
    {
      path: '/trade/rental',
      name: '장터',
      index: true,
      element: <TradePage type='rental' tradeService={tradeService} />,
      nodeRef: createRef(),
    },
    {
      path: '/trade/share',
      name: '장터',
      index: true,
      element: <TradePage type='share' tradeService={tradeService} />,
      nodeRef: createRef(),
    },
    {
      path: '/trade/detail/:id',
      name: 'detail',
      index: true,
      element: <TradeDetailPage tradeService={tradeService} />,
      nodeRef: createRef(),
    },
    {
      path: '/trade/search',
      name: '장터검색',
      index: true,
      element: <TradeSearchPage tradeService={tradeService} />,
      nodeRef: createRef(),
    },
    {
      path: '/trade/noteList',
      name: '쪽지함',
      index: true,
      element: <TradeNoteListPage tradeService={tradeService} />,
      nodeRef: createRef(),
    },
    {
      path: '/trade/note/:id',
      name: '쪽지함',
      index: true,
      element: <TradeNotePage tradeService={tradeService} />,
      nodeRef: createRef(),
    },
    {
      path: '/myInfo',
      name: '내정보',
      index: true,
      element: <MyInfo authService={authService} />,
      nodeRef: createRef(),
    },
  ];
  const router = useCallback(
    createBrowserRouter(
      [
        {
          path: '/',
          element: <Root routes={routes} />,
          children: routes.map((route) => {
            console.log(route.path === '/group');
            return {
              path: route.path,
              index: route.path === '/',
              path: route.path,
              element: route.element,
            };
          }),
        },
      ]
      //{ basename: '/asd' }
    ),
    [authService]
  );
  return <RouterProvider router={router} />;
}

export default App;
