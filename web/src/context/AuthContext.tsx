import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface AuthContextData {
  name: string;
  signIn(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('sign in');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Jamerson', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
