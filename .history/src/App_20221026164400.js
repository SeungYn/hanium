import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [],
  },
]);

function App() {
  return 1;
}

export default App;
