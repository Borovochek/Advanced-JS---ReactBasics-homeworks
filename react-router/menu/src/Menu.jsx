import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </>
  );
}
