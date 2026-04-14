import { createContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('userEmail');
    const adminStored = localStorage.getItem('userAdmin');
    const admin = adminStored ? adminStored === 'true' : false;
    if (token) {
      setUser({ token, email, admin });
    }
    setLoading(false);
  }, []);

  const login = (token, email, admin = false) => {
    localStorage.setItem('token', token);
    if (email) localStorage.setItem('userEmail', email);
    localStorage.setItem('userAdmin', String(!!admin));
    setUser({ token, email, admin: !!admin });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userAdmin');
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, loading, login, logout, isAuthenticated: !!user }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
