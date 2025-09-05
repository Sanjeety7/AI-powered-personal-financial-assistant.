import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { AuthForm } from './components/Auth/AuthForm';
import { Dashboard } from './components/Dashboard/Dashboard';
import { TransactionsList } from './components/Transactions/TransactionsList';
import { GoalsPage } from './components/Goals/GoalsPage';
import { ChatPage } from './components/AIChat/ChatPage';
import { InsightsPage } from './components/Insights/InsightsPage';
import { UploadPage } from './components/Upload/UploadPage';
import { ProfilePage } from './components/Profile/ProfilePage';
import { useAuthStore } from './store/authStore';

function App() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <AuthForm />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionsList />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;