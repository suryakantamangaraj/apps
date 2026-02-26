import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Master Layout Component
 * 
 * Provides the structural frame for all routes inside App.jsx.
 * The Navbar stays permanently fixed at the top. The Footer is conditionally
 * hidden on the `Home` page (because `Home.jsx` implements its own custom snap-footer),
 * but remains visible on all other child pages.
 */
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
