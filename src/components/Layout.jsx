import Navbar from './navbar/Navbar';
import Footer from './navbar/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-1 p-6 bg-gray-100 mt-16'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout