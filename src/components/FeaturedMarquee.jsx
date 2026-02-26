import { Zap, Layout, Terminal } from 'lucide-react';

const FeaturedMarquee = () => {
    // Flagship projects
    const flags = [
        { title: "Task Wizard", desc: "Automate daily productivity tracking natively.", icon: <Zap size={24} /> },
        { title: "Tailwind-ify", desc: "Instantly migrate legacy CSS to utility classes.", icon: <Layout size={24} /> },
        { title: "Vim Flux", desc: "A modern, reactive NeoVim configuration.", icon: <Terminal size={24} /> }
    ];

    // We duplicate the array to create a seamless infinite loop
    const duplicatedFlags = [...flags, ...flags, ...flags, ...flags];

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {duplicatedFlags.map((item, index) => (
                    <div key={index} className="glass-card tool-card marquee-card">
                        <div className="tool-icon" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                            {item.icon}
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedMarquee;
