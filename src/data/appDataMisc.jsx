import { Cpu, Database, AppWindow, Zap, Layout, Shield } from 'lucide-react';
import { genericPrivacyPolicy } from './shared';

export const appDataMisc = [
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
