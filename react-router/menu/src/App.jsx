import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './Menu';
import HomePage from './pages/HomePage';
import DriftPage from './pages/DriftPage';
import TimeAttackPage from './pages/TimeAttackPage';
import ForzaPage from './pages/ForzaPage';
// import './App.css'

const router = createBrowserRouter([
  {
    path: '/',               // корневой путь
    element: <Menu />,     // обёртка с навигацией
    children: [              // дочерние маршруты
      {
        index: true,         // это путь "/"
        element: <HomePage />
      },
      {
        path: 'drift',
        element: <DriftPage />
      },
      {
        path: 'timeattack',
        element: <TimeAttackPage />
      },
      {
        path: 'forza',
        element: <ForzaPage />
      }
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}