import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Master Layout Component
 * 
 * Provides the structural frame for all routes inside App.jsx.
 * The Navbar stays permanently fixed at the top. The Footer is conditionally
 * hidden on the `Home` page (because `Home.jsx` implements its own custom snap-footer),
 * but remains visible on all other child pages.
 * 
 * Canonical URL Strategy:
 * This component also globally injects a <link rel="canonical"> tag for every route.
 * It reads the current pathname from react-router and constructs a clean absolute URL
 * by stripping trailing slashes and discarding any query parameters / hash fragments.
 * This approach ensures canonical tags are consistently applied site-wide from a
 * single location, preventing duplicate content signals to search engine crawlers.
 */
const Layout = () => {
    const BASE_URL = 'https://apps.suryaraj.com';

    const location = useLocation();
    const isHome = location.pathname === '/';

    // Build a clean canonical path — strip trailing slashes, ignore query params & hashes
    const cleanPath = location.pathname.replace(/\/+$/, '') || '/';
    const canonicalUrl = `${BASE_URL}${cleanPath}`;

    return (
        <div className="app-wrapper">
            <Helmet>
                {/* Global canonical tag — overrides any duplicate URLs per route */}
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            <Navbar />
            <main>
                <Outlet />
            </main>
            {!isHome && <Footer />}
        </div>
    );
};

export default Layout;
