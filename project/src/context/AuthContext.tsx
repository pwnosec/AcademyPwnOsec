import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (profileData: User['profile']) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setAuthState({
        user: JSON.parse(storedUser),
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (username: string, password: string) => {
    // Simulated login logic
    const users = {
      student: {
        id: '1',
        username: 'student',
        role: 'student',
        email: 'student@example.com',
        profile: {
          fullName: '',
          bio: '',
          avatar: '',
          phoneNumber: '',
          location: '',
        },
      },
      admin: {
        id: 'admin1',
        username: 'admin',
        role: 'admin',
        email: 'admin@pwonosec.com',
        profile: {
          fullName: 'Admin User',
          avatar: 'https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=200',
        },
      },
    };

    const user = username === 'admin' && password === 'admin123' 
      ? users.admin 
      : username === 'student' && password === 'password'
        ? users.student
        : null;

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const updateProfile = (profileData: User['profile']) => {
    if (authState.user) {
      const updatedUser = {
        ...authState.user,
        profile: {
          ...authState.user.profile,
          ...profileData,
        },
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setAuthState({
        ...authState,
        user: updatedUser,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};