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

                <div className="privacy-text-body">
                    {app.privacyPolicy.split('\n\n').map((block, index) => {
                        // Skip if it's an H1 that just repeats the title
                        if (block.startsWith('# ')) {
                            const headerText = block.replace('# ', '').toLowerCase();
                            if (headerText.includes('privacy policy') || headerText.includes(app.title.toLowerCase())) {
                                return null;
                            }
                            return <h2 key={index}>{block.replace('# ', '')}</h2>;
                        }
                        
                        // Header 2
                        if (block.startsWith('## ')) {
                            return <h2 key={index} style={{ marginTop: '2.5rem' }}>{block.replace('## ', '')}</h2>;
                        }

                        // Bullet Points
                        if (block.includes('\n• ') || block.startsWith('• ')) {
                            const lines = block.split('\n');
                            const listItems = [];
                            const paragraphs = [];

                            lines.forEach(line => {
                                const trimmed = line.trim();
                                if (trimmed.startsWith('•')) {
                                    listItems.push(trimmed.replace(/^•\s*/, ''));
                                } else if (trimmed) {
                                    paragraphs.push(trimmed);
                                }
                            });

                            return (
                                <section key={index} style={{ margin: '1.5rem 0' }}>
                                    {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                                    <ul>
                                        {listItems.map((item, i) => {
                                            const [label, ...descParts] = item.split(':');
                                            const desc = descParts.join(':');
                                            return (
                                                <li key={i}>
                                                    {desc ? (
                                                        <>
                                                            <strong>{label}:</strong> {desc}
                                                        </>
                                                    ) : (
                                                        item
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </section>
                            );
                        }
                        // Default Paragraph
                        return <p key={index} style={{ marginBottom: '1.5rem' }}>{block}</p>;
                    })}
                </div>
            </article>
        </div>
    );
};

export default PrivacyPolicy;
