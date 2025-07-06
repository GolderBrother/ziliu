'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthService, RegisterRequest } from '@/lib/services/auth.service';
import { Button } from '@/components/ui/button';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState<RegisterRequest>({ email: '', username: '', password: '' });
  const [confirmPwd, setConfirmPwd] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.username || !form.password) return;
    if (form.password !== confirmPwd) {
      alert('两次输入的密码不一致');
      return;
    }
    setIsSubmitting(true);
    try {
      await AuthService.register(form);
      // 注册成功后引导登录
      await AuthService.login({ email: form.email, password: form.password });
      router.push('/');
    } catch (error: any) {
      alert(error?.message || '注册失败，请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold text-center">免费注册</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">邮箱</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-primary"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium">用户名</label>
            <input
              id="username"
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-primary"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">密码</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-primary"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="confirmPwd" className="block text-sm font-medium">确认密码</label>
            <input
              id="confirmPwd"
              name="confirmPwd"
              type="password"
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-primary"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? '注册中...' : '注册并登录'}
          </Button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          已经有账户？ <a href="/login" className="text-primary hover:underline">直接登录</a>
        </p>
      </div>
    </main>
  );
}