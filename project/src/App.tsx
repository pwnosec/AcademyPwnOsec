import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CourseProgressProvider } from './context/CourseProgressContext';
import { HomePage } from './pages/HomePage';
import { CourseDetail } from './pages/CourseDetail';
import { LoginPage } from './components/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { Navbar } from './components/Navbar';
import { AdminDashboard } from './pages/admin/Dashboard';
import { AdminRoute } from './components/AdminRoute';
import { SQLInjectionLab } from './pages/lab/SQLInjectionLab';
import { JWTTestingLab } from './pages/lab/JWTTestingLab';
import { CSRFTestingLab } from './pages/lab/CSRFTestingLab';
import { CORSTestingLab } from './pages/lab/CORSTestingLab';
import { SSRFTestingLab } from './pages/lab/SSRFTestingLab';
import { WebSecurityLab } from './pages/lab/WebSecurityLab';
import { XSSTestingLab } from './pages/lab/XSSTestingLab';
import { XXETestingLab } from './pages/lab/XXETestingLab';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <CourseProgressProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/course/:courseId"
              element={
                <PrivateRoute>
                  <CourseDetail />
                </PrivateRoute>
              }
            />
            {/* Lab Routes */}
            <Route
              path="/lab/sql"
              element={
                <PrivateRoute>
                  <SQLInjectionLab />
                </PrivateRoute>
              }
            />
            <Route
              path="/lab/jwt"
              element={
                <PrivateRoute>
                  <JWTTestingLab />
                </PrivateRoute>
              }
            />
            <Route
              path="/lab/csrf"
              element={
                <PrivateRoute>
                  <CSRFTestingLab />
                </PrivateRoute>
              }
            />
            <Route
              path="/lab/cors"
              element={
                <PrivateRoute>
                  <CORSTestingLab />
                </PrivateRoute>
              }
            />
            <Route
              path="/lab/ssrf"
              element={
                <PrivateRoute>
                  <SSRFTestingLab />
                </PrivateRoute>
              }
            />
            <Route
              path="/lab/websecurity"
              element={
                <PrivateRoute>
                  <WebSecurityLab />
                </PrivateRoute>
              }
            />
            <Route
              path="/lab/xss"
              element={
                <PrivateRoute>
                  <XSSTestingLab />
                </PrivateRoute>
              }
            />
            <Route
              path="/lab/xxe"
              element={
                <PrivateRoute>
                  <XXETestingLab />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </CourseProgressProvider>
    </AuthProvider>
  );
}