import { appDataGoogleApps } from './appDataGoogleApps';
import { appDataExtensions } from './appDataExtensions';
import { appDataThemes } from './appDataThemes';
import { appDataMisc } from './appDataMisc';
export { genericPrivacyPolicy } from './shared';

export const appsData = [
    // ============================================
    // 🚀 HOW TO ADD A NEW APP:
    // ============================================
    // 1. Open the specific category file (e.g., appDataGoogleApps.jsx).
    // 2. Copy an existing object bracket { ... } completely.
    // 3. Paste it at the bottom of the array.
    // 4. Change the 'id' string to something mathematically unique (ex: "super-app-2").
    // 5. Update the icon by importing a new one from 'lucide-react' at the top of the file.
    // 6. To customize the Privacy Policy, replace `genericPrivacyPolicy` with a unique template string \`Your custom text\`
    // 7. Be sure to matching the 'category' exact string to match its grouping!
    // -> After doing this, open src/pages/Home.jsx and add its preview dict into the top state arrays to show it on the homepage!

    ...appDataGoogleApps,
    ...appDataExtensions,
    ...appDataThemes,
    ...appDataMisc
];

export const getAppsByCategory = (categorySlug) => {
    return appsData.filter(app => app.category === categorySlug);
};

export const getAppById = (id) => {
    return appsData.find(app => app.id === id);
};
