import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getAppById } from '../data/appsData';

const PrivacyPolicy = () => {
    const { id } = useParams();
    const app = getAppById(id);

    // Render a 404 state if no matching app is found
    if (!app) {
        return (
            <div className="page-container app-detail-page" style={{ textAlign: 'center', paddingTop: '10vh' }}>
                <Link to="/" className="back-link" style={{ justifyContent: 'center' }}>
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <h1 className="title-gradient" style={{ fontSize: '4rem', margin: '2rem 0' }}>404</h1>
                <h2>App Not Found</h2>
                <p className="page-subtitle" style={{ maxWidth: '400px', margin: '0 auto' }}>
                    The digital tool you are looking for does not exist.
                </p>
            </div>
        );
    }

    return (
        <div className="page-container privacy-page">
            <div className="privacy-header">
                <Link to={`/app/${app.id}`} className="back-link">
                    <ArrowLeft size={16} /> Back to {app.title}
                </Link>
            </div>

            <article className="privacy-content">
                <header style={{ marginBottom: '3rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '2rem' }}>
                    <h1 className="title-gradient">{app.title} Privacy Policy</h1>
                    <p className="last-updated" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                        Last Updated: {app.lastUpdated}
                    </p>
                </header>

                <div className="privacy-text-body" style={{ whiteSpace: 'pre-line', lineHeight: '2', fontSize: '1.05rem', color: 'var(--off-white)' }}>
                    {app.privacyPolicy}
                </div>
            </article>
        </div>
    );
};

export default PrivacyPolicy;
