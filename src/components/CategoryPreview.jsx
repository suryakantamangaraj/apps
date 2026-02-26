import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TypingHeading from './TypingHeading';

const CategoryPreview = ({ title, description, appsArray, linkTo }) => {
    return (
        <section className="category-section" style={{ marginBottom: 0 }}>
            <div className="page-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                <TypingHeading
                    text={title}
                    className="page-title title-gradient"
                    style={{ fontSize: '2.5rem', margin: 0 }}
                />
                <p className="page-subtitle" style={{ margin: '0', maxWidth: '800px' }}>{description}</p>
            </div>

            <div className="grid-layout">
                {appsArray.map((app, index) => (
                    <div key={index} className="glass-card tool-card">
                        <div className="tool-icon">
                            {app.icon}
                        </div>
                        <h3>{app.title}</h3>
                        <p>{app.desc}</p>
                        <Link to={`/app/${app.id}`} className="link-arrow">
                            View App <ArrowRight size={16} />
                        </Link>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                <Link to={linkTo} className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--glass-border)' }}>
                    See all in {title}
                </Link>
            </div>
        </section>
    );
};

export default CategoryPreview;
