import { AppWindow, Puzzle, Palette, Cpu, Database, Blocks, FolderTree, CodeSquare, Image, BellRing, Zap, Layout, Shield } from 'lucide-react';

const genericPrivacyPolicy = `This Privacy Policy applies to this application. I built this tool to be transparent and respect your digital footprint. This document outlines exactly what data is collected and how it is utilized.

Data Collection & Usage:
This application is designed to minimize data collection. The vast majority of data processing occurs locally on your device.

• Local Storage: Configurations and preferences are stored locally utilizing standard browser or operating system APIs.
• Analytics: No third-party tracking or analytics SDKs are embedded.
• API Communication: If the app interacts with an external API, only the strictly necessary payload is transmitted.

Third-Party Services:
This tool does not sell, rent, or share personal information with third parties. Any interaction with external services is strictly facilitated through your own authenticated sessions and follows their respective privacy agreements.

Your Controls:
You have total control over your data. Because data is stored locally, uninstalling the application or clearing local storage will immediately purge all related configurations.

Contact:
If you have questions about this specific policy or the implementation details, feel free to reach out via my main site or GitHub repository.`;

export const appsData = [
    // Google Apps
    {
        id: "sheet-automator",
        category: "google-apps",
        title: "Sheet Automator",
        tagline: "Sync latest financial data into Sheets seamlessly.",
        description: "A custom Apps Script library that pulls the latest financial data directly into Sheets, cleaning formatting issues automatically.",
        version: "2.1.0",
        lastUpdated: "Dec 2025",
        platform: "Apps Script",
        storeLink: "https://workspace.google.com/marketplace",
        privacyPolicy: genericPrivacyPolicy,
        icon: <AppWindow size={32} />,
        features: [
            { title: "Lightning Fast", description: "Optimized for speed and minimal resource consumption natively.", icon: <Zap size={24} /> },
            { title: "Intuitive UI", description: "A clean, modern interface that gets out of your way and lets you work.", icon: <Layout size={24} /> },
            { title: "Privacy First", description: "Your data never leaves your device and runs entirely locally.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "drive-organizer",
        category: "google-apps",
        title: "Drive Organizer",
        tagline: "Automated tagging and archiving for optimal storage.",
        description: "Scan and archive old files, freeing up storage while maintaining an organized directory structure based on project tags.",
        version: "1.0.4",
        lastUpdated: "Jan 2026",
        platform: "Google Drive",
        storeLink: "https://workspace.google.com/marketplace",
        privacyPolicy: genericPrivacyPolicy,
        icon: <FolderTree size={32} />,
        features: [
            { title: "Smart Tagging", description: "AI-based tagging infers project scope and relevance natively.", icon: <Zap size={24} /> },
            { title: "Batch Actions", description: "Seamlessly move thousands of files without hitting rate limits.", icon: <Layout size={24} /> },
            { title: "Local Cache", description: "Maintains local references so large operations can be reverted safely.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "docs-exporter",
        category: "google-apps",
        title: "Docs Exporter",
        tagline: "Bulk transform Google Docs into clean Markdown.",
        description: "Bulk transform Google Docs into clean Markdown files for offline wikis.",
        version: "3.0.0",
        lastUpdated: "Feb 2026",
        platform: "Google Docs",
        storeLink: "https://workspace.google.com/marketplace",
        privacyPolicy: genericPrivacyPolicy,
        icon: <CodeSquare size={32} />,
        features: [
            { title: "Style Preservation", description: "Keeps bold, italics, and headers fully intact during conversion.", icon: <Zap size={24} /> },
            { title: "Image Extraction", description: "Automatically pulls out inline images and saves them locally.", icon: <Layout size={24} /> },
            { title: "Secure Export", description: "Does not require wide Drive OAuth scopes, only individual document access.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "forms-webhook",
        category: "google-apps",
        title: "Forms Webhook",
        tagline: "Trigger immediate API calls on form submission.",
        description: "Instantly trigger external API calls and Slack alerts whenever a Google Form is successfully submitted.",
        version: "1.2.0",
        lastUpdated: "Mar 2026",
        platform: "Apps Script",
        storeLink: "https://workspace.google.com/marketplace",
        privacyPolicy: genericPrivacyPolicy,
        icon: <Database size={32} />,
        features: [
            { title: "Real-time", description: "Zero delay between submission and Webhook execution.", icon: <Zap size={24} /> },
            { title: "Custom Payloads", description: "Map form fields dynamically to JSON.", icon: <Layout size={24} /> },
            { title: "Secure", description: "Supports hardened authorization headers natively.", icon: <Shield size={24} /> }
        ]
    },
    // Extensions
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
    // Themes
    {
        id: "suryaraj-dark",
        category: "themes",
        title: "Suryaraj Dark",
        tagline: "Interstellar colors for VS Code and NeoVim.",
        description: "A sophisticated dark theme inspired by interstellar colors. Optimized for prolonged coding sessions syntax highlighting.",
        version: "4.2.0",
        lastUpdated: "Dec 2025",
        platform: "VS Code",
        storeLink: "https://marketplace.visualstudio.com",
        privacyPolicy: genericPrivacyPolicy,
        icon: <Palette size={32} />,
        features: [
            { title: "Low Contrast Flow", description: "Reduces eye strain over 8+ hour coding stints.", icon: <Zap size={24} /> },
            { title: "Semantic Highlights", description: "Variables, functions, and types visually distinct.", icon: <Layout size={24} /> },
            { title: "Native Support", description: "No sketchy font patching required.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "terminal-matrix",
        category: "themes",
        title: "Terminal Matrix",
        tagline: "ZSH and iTerm2 cohesive environment setups.",
        description: "ZSH and iTerm2 configurations that seamlessly blend deep blue backgrounds with high-contrast, vibrant text.",
        version: "2.1.1",
        lastUpdated: "Aug 2025",
        platform: "macOS/iTerm2",
        storeLink: "https://github.com",
        privacyPolicy: genericPrivacyPolicy,
        icon: <Cpu size={32} />,
        features: [
            { title: "Powerline Ready", description: "Custom prompt segments that load instantaneously.", icon: <Zap size={24} /> },
            { title: "tmux Integration", description: "Colors propagate seamlessly into tmux panes.", icon: <Layout size={24} /> },
            { title: "GPG Verified", description: "Configurations are securely signed.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "syntax-highlighter",
        category: "themes",
        title: "Treesitter Blocks",
        tagline: "Custom JSON injections for optimal block scopes.",
        description: "Custom JSON injections and Treesitter queries geared towards block-level structural visibility.",
        version: "1.0.0",
        lastUpdated: "Feb 2026",
        platform: "NeoVim",
        storeLink: "https://github.com",
        privacyPolicy: genericPrivacyPolicy,
        icon: <Blocks size={32} />,
        features: [
            { title: "AST Awareness", description: "Highlights objects based on their Abstract Syntax Tree.", icon: <Zap size={24} /> },
            { title: "Zero Setup", description: "A simple plug-and-play lua block gets it running.", icon: <Layout size={24} /> },
            { title: "Lua First", description: "Written completely in pure Lua to maximize Neovim compatability.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "ocean-breeze",
        category: "themes",
        title: "Ocean Breeze",
        tagline: "A calming desktop palette for deep work.",
        description: "A sleek combination of teals and midnight blues designed to reduce eye strain during late-night coding sessions.",
        version: "1.0.2",
        lastUpdated: "Jan 2026",
        platform: "VS Code",
        storeLink: "https://marketplace.visualstudio.com",
        privacyPolicy: genericPrivacyPolicy,
        icon: <Palette size={32} />,
        features: [
            { title: "Accessible", description: "High contrast ratios for crystal clear legibility.", icon: <Zap size={24} /> },
            { title: "Calming", description: "Cool tones designed to keep you relaxed and focused.", icon: <Layout size={24} /> },
            { title: "Universal", description: "Supports over 40+ language syntaxes perfectly.", icon: <Shield size={24} /> }
        ]
    },
    // Misc
    {
        id: "dotfiles-hub",
        category: "misc",
        title: "Dotfiles Hub",
        tagline: "macOS/Linux workspace replication script.",
        description: "My entire macOS and Linux setup configuration in one place. Clone and bootstrap to instantly replicate my workspace.",
        version: "6.0.4",
        lastUpdated: "Jan 2026",
        platform: "Bash/Zsh",
        storeLink: "https://github.com",
        privacyPolicy: genericPrivacyPolicy,
        icon: <Cpu size={32} />,
        features: [
            { title: "Automated Bootstrap", description: "Install everything from Homebrew to Node with one script.", icon: <Zap size={24} /> },
            { title: "Modular", description: "Pick and choose exactly which dotfiles to merge.", icon: <Layout size={24} /> },
            { title: "Idempotent", description: "Running the script twice won't break your existing system.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "markdown-utils",
        category: "misc",
        title: "Markdown Utilities",
        tagline: "Python crawlers to validate links and metadata.",
        description: "Python scripts that crawl folders to validate links, format frontmatters, and sync personal wikis with correct tags.",
        version: "2.3.0",
        lastUpdated: "Feb 2026",
        platform: "Python",
        storeLink: "https://github.com",
        privacyPolicy: genericPrivacyPolicy,
        icon: <Database size={32} />,
        features: [
            { title: "Parallel Processing", description: "Scans thousands of files concurrently.", icon: <Zap size={24} /> },
            { title: "Rich Reports", description: "Generates HTML reports of all dead links.", icon: <Layout size={24} /> },
            { title: "Regex Guards", description: "Safely modifies frontmatter without damaging text blocks.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "network-sniffer",
        category: "misc",
        title: "Network Sniffer",
        tagline: "Local packet routing visibility for debugging.",
        description: "Minimalist local packet routing visibility wrapper for debugging API bottlenecks without Wireshark overload.",
        version: "0.9.1",
        lastUpdated: "Sep 2025",
        platform: "CLI/Rust",
        storeLink: "https://github.com",
        privacyPolicy: genericPrivacyPolicy,
        icon: <AppWindow size={32} />,
        features: [
            { title: "Blazing Fast", description: "Built in Rust for native OS performance.", icon: <Zap size={24} /> },
            { title: "Terminal UI", description: "Clean TUI dashboard that operates identically across OS systems.", icon: <Layout size={24} /> },
            { title: "Encrypted Logs", description: "All output captures are encrypted natively.", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "log-parser",
        category: "misc",
        title: "Log Parser",
        tagline: "Blazing fast Rust log parser.",
        description: "CLI utility to instantly query and filter gigabytes of server logs natively using regex matching.",
        version: "0.5.0",
        lastUpdated: "Feb 2026",
        platform: "Rust/CLI",
        storeLink: "https://github.com",
        privacyPolicy: genericPrivacyPolicy,
        icon: <Cpu size={32} />,
        features: [
            { title: "Multithreaded", description: "Chews through gigabytes of logs in milliseconds.", icon: <Zap size={24} /> },
            { title: "Regex Native", description: "Full PCRE matching for complex extraction tasks.", icon: <Layout size={24} /> },
            { title: "Memory Safe", description: "Zero crash guarantee through strict Rust memory models.", icon: <Shield size={24} /> }
        ]
    }
];

export const getAppsByCategory = (categorySlug) => {
    return appsData.filter(app => app.category === categorySlug);
};

export const getAppById = (id) => {
    return appsData.find(app => app.id === id);
};
