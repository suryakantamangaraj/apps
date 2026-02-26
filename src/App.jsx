import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CategoryView from './components/CategoryView';
import AppDetail from './pages/AppDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Dynamic Category View handled entirely based on URL root parameter */}
          <Route path=":categorySlug" element={<CategoryView />} />

          {/* Flat structure for app details as requested (e.g. /app/sheet-automator) */}
          <Route path="app/:id" element={<AppDetail />} />
          <Route path="app/:id/privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
