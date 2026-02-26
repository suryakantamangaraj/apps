import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getAppById } from '../data/appsData';

const MediaWrapper = () => (
    <div className="media-wrapper">
        <div className="media-placeholder">
            <div className="media-dots">
                <span></span><span></span><span></span>
            </div>
            <div className="media-content">
                Image / Video Demo<br />(16:9 Aspect Ratio)
            </div>
        </div>
    </div>
);

const AppDetail = () => {
    // Dynamically grab params and load data
    const { id } = useParams();
    const app = getAppById(id);

    // Render a localized 404 inside the layout if undefined id is passed
    if (!app) {
        return (
            <div className="page-container app-detail-page" style={{ textAlign: 'center', paddingTop: '10vh' }}>
                <Link to="/" className="back-link" style={{ justifyContent: 'center' }}>
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <h1 className="title-gradient" style={{ fontSize: '4rem', marginBottom: '2rem' }}>404</h1>
                <h2>App Not Found</h2>
                <p className="page-subtitle" style={{ maxWidth: '400px', margin: '1rem auto' }}>
                    The digital tool you are looking for has either been removed or does not exist.
                </p>
            </div>
        );
    }

    return (
        <div className="page-container app-detail-page">
            <Link to={`/${app.category}`} className="back-link">
                <ArrowLeft size={16} /> Back to {app.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </Link>

            <section className="app-detail-hero">
                <div className="app-hero-content">
                    <div className="app-hero-icon">
                        {app.icon}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <h1 className="title-gradient" style={{ marginBottom: 0 }}>{app.title}</h1>
                        <span className="platform-tag" style={{ alignSelf: 'center' }}>v{app.version}</span>
                    </div>

                    <p className="app-hero-pitch">{app.tagline}</p>
                    <p className="app-hero-desc">{app.description}</p>

                    <a href={app.storeLink} target="_blank" rel="noopener noreferrer" className="btn-primary app-cta">
                        Download / View in Store <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="app-hero-media">
                    <MediaWrapper />
                </div>
            </section>

            <section className="app-features-section">
                <h2 className="title-gradient">Core Features</h2>
                <div className="features-grid">
                    {app.features.map((feat, idx) => (
                        <div key={idx} className="feature-card glass-card">
                            <div className="feature-icon">{feat.icon}</div>
                            <h3>{feat.title}</h3>
                            <p>{feat.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="app-detail-footer">
                <p>Before installing, please review our data handling practices.</p>
                <Link to={`/app/${app.id}/privacy`} className="privacy-link">
                    Privacy Policy
                </Link>
            </div>
        </div>
    );
};

export default AppDetail;
