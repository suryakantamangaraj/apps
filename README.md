# Surya Studio Dashboard

Welcome to Surya Studio! This is a dynamic, fully responsive React (Vite) portfolio application designed to showcase custom digital tools, google scripts, browser extensions, UI themes, and miscellaneous system utilities.

It features a high-performance frosted glassmorphism interface, scroll-snapping discovery sections on the homepage, dynamic React routing, and GitHub Action CI/CD deployment logic.

---

## 🚀 Quick Start

To run this repository locally:

```bash
# 1. Install dependencies
npm install

# 2. Spin up the Vite development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🗂️ Project Structure

- **/public**: Contains static static assets and the `CNAME` file required for your custom `apps.suryaraj.com` domain.
- **/src/components**: Reusable UI blocks (Navbar, Hero, Feature Marquee, Category Grid items, Glassmorphic Cards).
- **/src/pages**: The main page views that map to routes (Home, CategoryView arrays, AppDetail breakdowns).
- **/src/data/appsData.jsx**: The singular source of truth for all content on this application.

---

## 🛠️ How to Add a New App to Your Portfolio

To make managing your catalog as frictionless as possible, the entire site is driven by a single centralized data file. **You do not need to build new HTML or CSS pages when you create a new project.**

To add a new app to the platform, follow these two simple steps:

### Step 1: Add it to the Global Data Store
Navigate to `src/data/appsData.jsx`. At the bottom of the `appsData` array, simply add a new Javascript object outlining your project's details.

**Template Structure:**
```javascript
{
    id: "your-app-slug",                 // MUST be unique! Used for the URL (/app/your-app-slug)
    category: "google-apps",             // Options: "google-apps", "extensions", "themes", "misc"
    title: "Awesome App Name",           // The display name
    tagline: "Short 6-word summary.",    // Used on the bento grid cards
    description: "A longer 2-3 sentence paragraph explaining exactly what this app does.",
    version: "1.0.0",
    lastUpdated: "Mar 2026",
    platform: "Node.js",                 // The runtime environment
    storeLink: "https://github.com/your-repo", // Call to Action button link
    privacyPolicy: genericPrivacyPolicy,
    icon: <CodeSquare size={32} />,      // Import any icon from lucide-react at the top of the file!
    features: [
        // These generate the 3 feature cards on the App Detail page
        { title: "Fast", description: "It is very fast.", icon: <Zap size={24} /> },
        { title: "Secure", description: "It is very secure.", icon: <Shield size={24} /> },
        { title: "UI", description: "It looks great.", icon: <Layout size={24} /> }
    ]
}
```

### Step 2: Add it to the Homepage Preview Grids
Navigate to `src/pages/Home.jsx`. Near the top, you will see four separate arrays (like `googleAppsData`, `extensionsData`, etc.). These explicitly control which 3 or 4 apps get "featured" on the homepage scroll-snapping layout.

Simply append a shortened summary of your new app to the correct array so it shows up on the homepage:

```javascript
const googleAppsData = [
  // ... existing apps
  { 
      id: "your-app-slug",         // MUST match the ID you set in Step 1
      title: "Awesome App Name", 
      desc: "Short 6-word summary.", 
      icon: <CodeSquare size={32} /> 
  }
];
```

That's it! The dynamic routing (`/src/pages/AppDetail.jsx`) will automatically generate an entire landing page for your new application instantly based on the ID you provided.

---

## 🌐 Deployment (GitHub Actions)

This project is configured with a continuous deployment workflow located in `.github/workflows/deploy.yml`. 

Whenever code gets pushed to the `prod-dev` branch, GitHub Actions will automatically:
1. Fire up a Linux container.
2. Install Node dependencies.
3. Compress and compile the site using `npm run build`.
4. Push the resulting `/dist` folder (along with your `CNAME` file) forcefully into the `main` branch.

Your GitHub Pages integration natively watches the `main` branch, meaning your live site simply updates itself within 60 seconds of pushing to `prod-dev`!
