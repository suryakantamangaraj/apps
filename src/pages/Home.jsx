import { AppWindow, Puzzle, Palette, Cpu, Database, Blocks, FolderTree, CodeSquare, Image, BellRing } from 'lucide-react';
import Hero from '../components/Hero';
import FeaturedMarquee from '../components/FeaturedMarquee';
import CategoryPreview from '../components/CategoryPreview';
import Footer from '../components/Footer';
import TypingHeading from '../components/TypingHeading';

const Home = () => {
    // Setup data for the category previews
    const googleAppsData = [
        { id: "sheet-automator", title: "Sheet Automator", desc: "Sync latest financial data into Sheets seamlessly.", icon: <AppWindow size={32} /> },
        { id: "drive-organizer", title: "Drive Organizer", desc: "Automated tagging and archiving for optimal storage.", icon: <FolderTree size={32} /> },
        { id: "docs-exporter", title: "Docs Exporter", desc: "Bulk transform Google Docs into clean Markdown files.", icon: <CodeSquare size={32} /> }
    ];

    const extensionsData = [
        { id: "link-manager-pro", title: "Link Manager Pro", desc: "Categorize, save, and export open tabs.", icon: <Puzzle size={32} /> },
        { id: "focus-mode-plus", title: "Focus Mode Plus", desc: "Block distracting sites strictly during work hours.", icon: <BellRing size={32} /> },
        { id: "image-grabber", title: "DOM Image Grabber", desc: "Extract and zip all images straight from a loaded DOM.", icon: <Image size={32} /> }
    ];

    const themesData = [
        { id: "suryaraj-dark", title: "Suryaraj Dark", desc: "Interstellar colors for VS Code and NeoVim.", icon: <Palette size={32} /> },
        { id: "terminal-matrix", title: "Terminal Matrix", desc: "ZSH and iTerm2 cohesive environment setups.", icon: <Cpu size={32} /> },
        { id: "syntax-highlighter", title: "Treesitter Blocks", desc: "Custom JSON injection for optimal block scopes.", icon: <Blocks size={32} /> }
    ];

    const miscData = [
        { id: "dotfiles-hub", title: "Dotfiles Hub", desc: "macOS/Linux workspace replication script.", icon: <Cpu size={32} /> },
        { id: "markdown-utils", title: "Markdown Utilities", desc: "Python crawlers for dead link validation.", icon: <Database size={32} /> },
        { id: "network-sniffer", title: "Network Sniffer", desc: "Local packet routing visibility for debugging.", icon: <AppWindow size={32} /> }
    ];

    return (
        <div className="home-snapper">
            <div className="snap-section" style={{ justifyContent: 'center', padding: '2rem 5%' }}>
                <Hero />
            </div>

            <div className="snap-section" id="arsenal-categories">
                <CategoryPreview
                    title="Google Apps"
                    description="A collection of scripts and integrations designed specifically for Google Workspace apps to automate mundane tasks."
                    appsArray={googleAppsData}
                    linkTo="/google-apps"
                />
            </div>

            <div className="snap-section">
                <CategoryPreview
                    title="Extensions"
                    description="Browser power-ups and editor plugins that extend functionality and improve my day-to-day productivity."
                    appsArray={extensionsData}
                    linkTo="/extensions"
                />
            </div>

            <div className="snap-section">
                <CategoryPreview
                    title="Themes"
                    description="Carefully crafted color schemes and UI overhauls that make working in a terminal or editor visually pleasing."
                    appsArray={themesData}
                    linkTo="/themes"
                />
            </div>

            <div className="snap-section">
                <CategoryPreview
                    title="Miscellaneous"
                    description="Scripts, snippets, and tools that defy categorization, but are nonetheless crucial for specific workflows."
                    appsArray={miscData}
                    linkTo="/misc"
                />
            </div>

            <div className="snap-section" style={{ padding: 0, justifyContent: 'space-between' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <FeaturedMarquee />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
