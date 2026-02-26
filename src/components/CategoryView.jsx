import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, ArrowUpRight } from 'lucide-react';
import { getAppsByCategory } from '../data/appsData';

const AppCard = ({ id, icon, title, tagline, version, platform }) => {
    return (
        <Link to={`/app/${id}`} className="glass-card app-card">
            <div className="app-card-header">
                <div className="app-icon-wrapper">
                    {icon}
                </div>
                <span className="platform-tag">{platform}</span>
            </div>

            <div className="app-card-content">
                <h3>{title}</h3>
                <p>{tagline}</p>
            </div>

            <div className="app-card-footer">
                <div className="app-meta">
                    <span className="app-version">v{version}</span>
                </div>
                <div className="view-details">
                    <ArrowUpRight size={20} className="arrow-icon" />
                </div>
            </div>
        </Link>
    );
};

const CategoryView = () => {
    const { categorySlug } = useParams();
    const [searchQuery, setSearchQuery] = useState('');

    // Format category slug to Title Case (e.g. google-apps -> Google Apps)
    const categoryName = categorySlug
        ? categorySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        : 'Category';

    // Get apps and filter by search query
    const apps = getAppsByCategory(categorySlug);
    const filteredApps = apps.filter(app =>
        app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.platform.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="page-container">
            <div className="page-header category-header">
                <h1 className="page-title title-gradient">{categoryName}</h1>
                <p className="page-subtitle">Explore our collection of {categoryName}</p>
            </div>

            <div className="filter-bar">
                <div className="search-input-wrapper">
                    <Search size={20} className="search-icon" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder={`Search apps in ${categoryName}...`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="filter-stats">
                    <span>Showing {filteredApps.length} tools</span>
                </div>
            </div>

            <div className="bento-grid">
                {filteredApps.length > 0 ? (
                    filteredApps.map(app => (
                        <AppCard
                            key={app.id}
                            {...app}
                        />
                    ))
                ) : (
                    <div className="empty-state">
                        <p>No tools found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryView;
