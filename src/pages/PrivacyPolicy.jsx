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
                <h1 className="title-gradient">{app.title} Privacy Policy</h1>
                <p className="last-updated" style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
                    Last Updated: {app.lastUpdated}
                </p>

                <div
                    className="privacy-text-body"
                    style={{
                        whiteSpace: 'pre-wrap',
                        lineHeight: '2',
                        fontSize: '1.1rem',
                        color: 'var(--off-white)'
                    }}
                >
                    {app.privacyPolicy}
                </div>
            </article>
        </div>
    );
};

export default PrivacyPolicy;
