import { X, Mail, Lock, Shield } from 'lucide-react';
import { useState } from 'react';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onAdminLogin: (email: string, password: string) => void;
}

export function AdminLogin({ isOpen, onClose, onAdminLogin }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdminLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-purple-600 to-blue-600 rounded-t-lg">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-white" />
            <h2 className="text-2xl text-white">Admin Login</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Demo Credentials:</strong><br />
              Email: admin@ceylandproperty.com<br />
              Password: admin123
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-2">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                placeholder="admin@ceylandproperty.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">
              Admin Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition flex items-center justify-center gap-2"
          >
            <Shield className="w-5 h-5" />
            Login as Administrator
          </button>
        </form>
      </div>
    </div>
  );
}
