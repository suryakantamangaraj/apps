import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CategoryView from './components/CategoryView';
import AppDetail from './pages/AppDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

/**
 * Root Application Component
 * 
 * Handles all React Router configurations.
 * Features a single `<Layout />` wrapper to ensure the Navbar is globally persistent.
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Index Route: Displays the landing page snap-scroll feed */}
          <Route index element={<Home />} />

          {/* Dynamic Category Layout: Captures slugs like /google-apps or /themes */}
          <Route path=":categorySlug" element={<CategoryView />} />

          {/* App Detail Routes: Render specific app architectures by ID */}
          {/* e.g., /app/task-wizard */}
          <Route path="app/:id" element={<AppDetail />} />

          {/* Privacy Policy Route: Renders dynamic markdown specific to the :id */}
          <Route path="app/:id/privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
