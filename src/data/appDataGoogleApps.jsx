import { AppWindow, FolderTree, CodeSquare, Database, Zap, Layout, Shield } from 'lucide-react';
import { genericPrivacyPolicy } from './shared';

export const appDataGoogleApps = [
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
        privacyPolicy: `This is a custom privacy policy exclusively for Drive Organizer. 

Unlike other tools, Drive Organizer requires OAuth permissions to read your metadata.

How it works:
1. We request readonly metadata scope.
2. We never scrape file contents.
3. Your folder names are stored in local storage for quick access.`,
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
    }
];
