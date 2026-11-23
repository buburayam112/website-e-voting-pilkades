export interface AdminUser {
  id: string;
  username: string;
  email: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface AdminSession {
  user: AdminUser;
  token: string;
  loginAt: string;
  expiresAt: string;
}

const SESSION_KEY = 'evote_admin_session_v1';

// Default authorized credentials
const DEFAULT_ACCOUNTS = [
  {
    username: 'admin',
    email: 'admin@mempawahkab.go.id',
    password: 'admin',
    name: 'Administrator Diskominfo',
    role: 'Super Admin E-Voting'
  },
  {
    username: 'humas',
    email: 'humas@mempawahkab.go.id',
    password: 'admin',
    name: 'Pengelola Berita & Informasi',
    role: 'Editor Berita'
  },
  {
    username: 'diskominfo',
    email: 'diskominfo@mempawahkab.go.id',
    password: 'Mempawah2026!',
    name: 'Tim Teknis Diskominfo Mempawah',
    role: 'Administrator Resmi'
  }
];

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
}

export class AdminAuthService {
  /**
   * Check if current user has an active admin session
   */
  public static isAuthenticated(): boolean {
    if (!isBrowser()) return false;
    try {
      const raw = window.sessionStorage.getItem(SESSION_KEY) || window.localStorage.getItem(SESSION_KEY);
      if (!raw) return false;
      const session = JSON.parse(raw) as AdminSession;
      return Boolean(session && session.token && session.user);
    } catch {
      return false;
    }
  }

  /**
   * Get active admin session
   */
  public static getSession(): AdminSession | null {
    if (!isBrowser()) return null;
    try {
      const raw = window.sessionStorage.getItem(SESSION_KEY) || window.localStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      return JSON.parse(raw) as AdminSession;
    } catch {
      return null;
    }
  }

  /**
   * Login with username/email and password
   */
  public static login(
    identifier: string,
    pass: string,
    remember: boolean = false
  ): { success: boolean; message: string; session?: AdminSession } {
    if (!isBrowser()) {
      return { success: false, message: 'Operasi hanya dapat dilakukan di peramban.' };
    }

    const cleanUser = identifier.trim().toLowerCase();
    const cleanPass = pass.trim();

    if (!cleanUser || !cleanPass) {
      return { success: false, message: 'Nama pengguna dan kata sandi wajib diisi.' };
    }

    // Match against default allowed accounts
    const match = DEFAULT_ACCOUNTS.find(
      (acc) =>
        (acc.username.toLowerCase() === cleanUser || acc.email.toLowerCase() === cleanUser) &&
        acc.password === cleanPass
    );

    if (!match) {
      return {
        success: false,
        message: 'Kombinasi nama pengguna dan kata sandi tidak cocok. Silakan periksa kembali.'
      };
    }

    const now = new Date();
    const expires = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours

    const session: AdminSession = {
      user: {
        id: `usr-${match.username}`,
        username: match.username,
        email: match.email,
        name: match.name,
        role: match.role
      },
      token: `tk_${btoa(match.username + '_' + Date.now())}`,
      loginAt: now.toISOString(),
      expiresAt: expires.toISOString()
    };

    const sessionStr = JSON.stringify(session);
    window.sessionStorage.setItem(SESSION_KEY, sessionStr);
    if (remember) {
      window.localStorage.setItem(SESSION_KEY, sessionStr);
    }

    return { success: true, message: 'Autentikasi berhasil.', session };
  }

  /**
   * Logout user and redirect
   */
  public static logout(redirectUrl: string = '/admin/login'): void {
    if (isBrowser()) {
      window.sessionStorage.removeItem(SESSION_KEY);
      window.localStorage.removeItem(SESSION_KEY);
      window.location.href = redirectUrl;
    }
  }

  /**
   * Route Guard: Ensure user is authenticated, otherwise redirect to login
   */
  public static requireAuth(redirectUrl: string = '/admin/login'): boolean {
    if (!isBrowser()) return false;
    if (!this.isAuthenticated()) {
      window.location.replace(redirectUrl);
      return false;
    }
    return true;
  }

  /**
   * Route Guard: If user is already logged in, redirect them to dashboard
   */
  public static redirectIfAuthenticated(targetUrl: string = '/admin'): void {
    if (!isBrowser()) return;
    if (this.isAuthenticated()) {
      window.location.replace(targetUrl);
    }
  }
}
