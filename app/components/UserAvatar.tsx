'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, Shield, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '@/lib/auth/AuthContext';
import { useRouter } from 'next/navigation';
import Portal from './Portal';

interface UserAvatarProps {
  colorTheme?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  onLogout?: () => void;
}

export default function UserAvatar({ colorTheme, onLogout }: UserAvatarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { user } = useAuth();
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get user initials for avatar
  const getInitials = (email: string) => {
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase();
  };

  const handleProfileClick = () => {
    setIsOpen(false);
    router.push('/profile');
  };

  const handleSecurityClick = () => {
    setIsOpen(false);
    router.push('/security');
  };

  const handleLogoutClick = () => {
    setIsOpen(false);
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Button */}
      <motion.button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20 dark:border-slate-700/30"
        style={{
          background: `linear-gradient(135deg, ${colorTheme?.primary || '#4f46e5'}20, ${colorTheme?.secondary || '#06b6d4'}20)`,
          borderColor: `${colorTheme?.accent || '#0891b2'}30`
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Avatar Circle */}
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
          style={{
            background: `linear-gradient(135deg, ${colorTheme?.primary || '#4f46e5'}, ${colorTheme?.secondary || '#06b6d4'})`
          }}
        >
          {user?.email ? getInitials(user.email) : 'U'}
        </div>
        
        {/* Email and Chevron */}
        <div className="flex items-center space-x-1">
          <span className="text-sm text-slate-700 dark:text-slate-300 max-w-32 truncate">
            {user?.email || 'User'}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          </motion.div>
        </div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <Portal>
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed w-56 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 dark:border-slate-700/30 overflow-hidden"
              style={{
                top: 80,
                right: 24,
                boxShadow: `0 20px 40px ${colorTheme?.primary || '#4f46e5'}10`
              }}
              ref={dropdownRef}
            >
            {/* User Info Header */}
            <div className="px-4 py-3 border-b border-slate-200/50 dark:border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                  style={{
                    background: `linear-gradient(135deg, ${colorTheme?.primary || '#4f46e5'}, ${colorTheme?.secondary || '#06b6d4'})`
                  }}
                >
                  {user?.email ? getInitials(user.email) : 'U'}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {user?.email?.split('@')[0] || 'User'}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-40">
                    {user?.email || 'user@example.com'}
                  </p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <motion.button
                onClick={handleProfileClick}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                <User className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Profile</span>
              </motion.button>

              <motion.button
                onClick={handleSecurityClick}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                <Shield className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Security</span>
              </motion.button>

              <motion.button
                onClick={handleSecurityClick}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                <Settings className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Settings</span>
              </motion.button>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200/50 dark:border-slate-700/50 my-1"></div>

            {/* Logout */}
            <div className="py-1">
              <motion.button
                onClick={handleLogoutClick}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-red-50/50 dark:hover:bg-red-900/20 transition-colors duration-200 text-red-600 dark:text-red-400"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </motion.button>
            </div>
          </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </div>
  );
}
