'use client';

import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabase } from './SupabaseProvider';
import { notify } from '@/lib/notifications';

interface AuthContextType {
  user: any;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAdmin: false,
  signIn: async () => {},
  signOut: async () => {},
  loading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = useSupabase();

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (event === 'SIGNED_OUT') {
        router.push('/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase, router]);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      notify.success('Successfully signed out');
      router.push('/');
    } catch (error) {
      notify.error('Error signing out');
    }
  };

  // Check if user is admin by looking at their role in the profiles table
  useEffect(() => {
    if (user?.id) {
      supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()
        .then(({ data }) => {
          if (data?.role === 'admin') {
            setUser(prev => ({ ...prev, role: 'admin' }));
          }
        });
    }
  }, [user?.id, supabase]);

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, isAdmin, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
} 