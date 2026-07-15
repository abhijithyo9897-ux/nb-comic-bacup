import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import NavigationDock from './components/NavigationDock';

// Pages
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import ComicContextHub from './pages/ComicContextHub';
import ReaderCanvas from './pages/ReaderCanvas';
import SubscriptionConsole from './pages/SubscriptionConsole';
import NewsHub from './pages/NewsHub';
import SettingsProfile from './pages/SettingsProfile';
import ContributorFramework from './pages/ContributorFramework';
import TermsAndConditions from './pages/TermsAndConditions';
import TechnicalArchitecture from './pages/TechnicalArchitecture';
import FundraisingStrategy from './pages/FundraisingStrategy';
import DatabaseSchema from './pages/DatabaseSchema';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }
  return (
    <>
      {children}
      <NavigationDock />
    </>
  );
};

function AppRoutes() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/comic/:id" element={<ProtectedRoute><ComicContextHub /></ProtectedRoute>} />
        <Route path="/read/:id" element={<ProtectedRoute><ReaderCanvas /></ProtectedRoute>} />
        <Route path="/subs" element={<ProtectedRoute><SubscriptionConsole /></ProtectedRoute>} />
        <Route path="/news" element={<ProtectedRoute><NewsHub /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><SettingsProfile /></ProtectedRoute>} />
        
        {/* Policy Pages */}
        <Route path="/contributors" element={<ContributorFramework />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/architecture" element={<TechnicalArchitecture />} />
        <Route path="/fundraising" element={<FundraisingStrategy />} />
        <Route path="/schema" element={<DatabaseSchema />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
