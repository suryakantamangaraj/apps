import { Puzzle, BellRing, Image, AppWindow, Zap, Layout, Shield, CheckCircle2, Palette } from 'lucide-react';
import { genericPrivacyPolicy } from './shared';

export const appDataExtensions = [
    {
        id: "link-manager-pro",
        category: "extensions",
        title: "Link Manager Pro",
        tagline: "Categorize, save, and export open tabs.",
        description: "A Chrome extension to categorize, save, and export your open tabs across multple workspaces with a single click.",
        version: "1.4.2",
        lastUpdated: "Nov 2025",
        platform: "Chromium",
        storeLink: "https://chrome.google.com/webstore",
        privacyPolicy: genericPrivacyPolicy,
        icon: <Puzzle size={32} />,
        features: [
            { title: "One-Click Save", description: "Immediately bundle all open tabs into an organized workspace container.", icon: <Zap size={24} /> },
            { title: "Drag & Drop", description: "Visually reorder your saved links with ease.", icon: <Layout size={24} /> },
            { title: "No Cloud Required", description: "All workspaces are stored specifically on your physical machine.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "focus-mode-plus",
        category: "extensions",
        title: "Focus Mode Plus",
        tagline: "Strictly block distracting sites during work hours.",
        description: "Blocks distracting sites and gently nudges you back to defined goals whenever you stray during working hours.",
        version: "2.5.0",
        lastUpdated: "Jan 2026",
        platform: "Firefox/Chrome",
        storeLink: "https://chrome.google.com/webstore",
        privacyPolicy: genericPrivacyPolicy,
        icon: <BellRing size={32} />,
        features: [
            { title: "Pomodoro Integration", description: "Built-in timers structure your blocking schedules.", icon: <Zap size={24} /> },
            { title: "Soft Interventions", description: "Uses breathing exercise screens before forcing a block.", icon: <Layout size={24} /> },
            { title: "Tamper Proof", description: "Prevents easy circumvention during active deep-work blocks.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "image-grabber",
        category: "extensions",
        title: "DOM Image Grabber",
        tagline: "Extract and zip all images straight from a loaded DOM.",
        description: "Extract and zip all foreground and background images straight from a loaded DOM.",
        version: "1.0.1",
        lastUpdated: "Oct 2025",
        platform: "Chrome MV3",
        storeLink: "https://chrome.google.com/webstore",
        privacyPolicy: genericPrivacyPolicy,
        icon: <Image size={32} />,
        features: [
            { title: "Deep Scan", description: "Finds CSS background images often missed by right-click saving.", icon: <Zap size={24} /> },
            { title: "Auto Zip", description: "Packages 100+ images instantly into a single compressed download.", icon: <Layout size={24} /> },
            { title: "Client Side", description: "Processing happens on your RAM, not an external server.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "cookie-cleaner",
        category: "extensions",
        title: "Cookie Cleaner",
        tagline: "Purge domain-specific cookies in one click.",
        description: "A developer tool that aggressively clears all cookies and local storage tokens for the active tab's domain without affecting other sites.",
        version: "2.1.0",
        lastUpdated: "Dec 2025",
        platform: "Chrome",
        storeLink: "https://chrome.google.com/webstore",
        privacyPolicy: genericPrivacyPolicy,
        icon: <AppWindow size={32} />,
        features: [
            { title: "Targeted", description: "Only affects the exact URL domain you are currently viewing.", icon: <Zap size={24} /> },
            { title: "Comprehensive", description: "Scraps cookies, localStorage, and sessionStorage.", icon: <Layout size={24} /> },
            { title: "Safe", description: "Leaves authenticated sessions on other tabs completely untouched.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "task-wizard",
        category: "extensions",
        title: "Task Wizard",
        tagline: "Aesthetic task management inside your browser.",
        description: "Transform your new tab page into a beautifully crafted, frosted glassmorphism productivity dashboard. Organize tasks, track deadlines, and eliminate the noise.",
        version: "1.0.0",
        lastUpdated: "November 2024",
        platform: "Chrome",
        storeLink: "https://chromewebstore.google.com/detail/ooookbehgjagiomcfhalicofgpcfmcfn",
        privacyPolicy: genericPrivacyPolicy,
        icon: <CheckCircle2 size={32} />,
        media: [
            { type: "image", url: "/media/extensions/task-wizard/demo.png" },
            { type: "image", url: "/media/extensions/task-wizard/demo2.png" },
            { type: "video", url: "/media/extensions/task-wizard/demo.mp4" }
        ],
        features: [
            { title: "Glassmorphism UI", description: "Immersive frosted glass design makes organizing tasks visually delightfully.", icon: <Palette size={24} /> },
            { title: "Smart Prioritization", description: "Automatically sort tickets by approaching deadlines and relevance.", icon: <Zap size={24} /> },
            { title: "Fully Local", description: "All tasks are stored completely locally via localStorage. Zero cloud syncing.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "tailwind-ify",
        category: "extensions",
        title: "Tailwind-ify",
        tagline: "Convert CSS to Tailwind classes effortlessly.",
        description: "A Chrome extension that inspects your webpage's styles and converts them into Tailwind CSS classes in real-time.",
        version: "1.0.1",
        lastUpdated: "March 2026",
        platform: "Chrome",
        storeLink: "https://chrome.google.com/webstore",
        privacyPolicy: `This Privacy Policy applies to the Tailwind-ify Chrome extension. This tool was built to be transparent and respect your digital footprint.

Data Collection & Usage:
Tailwind-ify is designed for zero data collection. All CSS processing and Tailwind class conversion occurs locally on your device within the browser's sandbox.

• Chrome Permissions (activeTab): This permission is used exclusively to inspect the styles of elements on the webpage you are currently viewing. No browsing history or page content is recorded or transmitted.
• Local Storage: Any configurations or preferences are stored locally using standard Chrome Storage APIs. No data is synced to external servers.
• Analytics: Tailwind-ify does not include any third-party tracking or analytics SDKs.

Third-Party Services:
This tool does not sell, rent, or share personal information with third parties. It is a standalone developer tool with no external API dependencies.

Your Controls:
You have total control over your data. Because all data is stored locally, uninstalling the extension or clearing your browser data will immediately purge all related configurations.

Contact:
If you have questions about this policy or the implementation details, feel free to reach out via contact@suryaraj.com`,
        icon: <Puzzle size={32} />,
        media: [
            { type: "image", url: "/media/extensions/tailwind-ify/featured_tile_440x280.png" },
            { type: "image", url: "/media/extensions/tailwind-ify/google_copied.png" },
            { type: "image", url: "/media/extensions/tailwind-ify/google_inspection.png" },
            { type: "image", url: "/media/extensions/tailwind-ify/suryaraj_hero.png" },
            { type: "image", url: "/media/extensions/tailwind-ify/suryaraj_copied.png" },
            { type: "image", url: "/media/extensions/tailwind-ify/suryaraj_inspection.png" },
        ],
        features: [
            { title: "Real-Time Conversion", description: "Instantly convert CSS styles to Tailwind classes as you inspect elements.", icon: <Zap size={24} /> },
            { title: "Customizable", description: "Adjust Tailwind configurations to match your project setup.", icon: <Layout size={24} /> },
            { title: "Local Processing", description: "All operations are performed locally, ensuring privacy and speed.", icon: <Shield size={24} /> }
        ]
    }
];
