import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-blue-600">
            <Shield className="w-6 h-6" />
            <span className="font-bold text-xl">PwnOsec Academy</span>
          </Link>

          {user && (
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  {user.profile?.avatar ? (
                    <img
                      src={user.profile.avatar}
                      alt={user.profile?.fullName || user.username}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-5 h-5 text-blue-600" />
                  )}
                </div>
                <span>{user.profile?.fullName || user.username}</span>
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </Link>
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 w-full text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}