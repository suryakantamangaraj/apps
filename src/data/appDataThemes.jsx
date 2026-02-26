import { Palette, Cpu, Blocks, Zap, Layout, Shield } from 'lucide-react';
import { genericPrivacyPolicy } from './shared';

export const appDataThemes = [
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
    }
];
