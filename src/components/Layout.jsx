import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="app-wrapper">
            <Navbar />
            <main>
                <Outlet />
            </main>
            {!isHome && <Footer />}
        </div>
    );
};

export default Layout;
