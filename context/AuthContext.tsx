// context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

type AuthContextType = {
  isLoggedIn: boolean;
  avatarUrl: string | null;
  login: (avatarUrl: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    // Kiểm tra cookie và cập nhật trạng thái khi trang được tải
    const storedAvatarUrl = Cookies.get('avatarUrl');
    if (storedAvatarUrl) {
      setIsLoggedIn(true);
      setAvatarUrl(storedAvatarUrl);
    }
  }, []);

  const login = (url: string) => {
    setIsLoggedIn(true);
    setAvatarUrl(url);
    Cookies.set('avatarUrl', url, { expires: 5 }); // Lưu avatarUrl vào cookies, hết hạn sau 7 ngày
  };

  const logout = () => {
    setIsLoggedIn(false);
    setAvatarUrl(null);
    Cookies.remove('avatarUrl'); // Xóa cookies khi đăng xuất
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, avatarUrl, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
