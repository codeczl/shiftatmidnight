import { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';
import createMiddleware from 'next-intl/middleware';
import { appConfig } from "./lib/appConfig";

const intlMiddleware = createMiddleware({
  locales: appConfig.i18n.locales,
  defaultLocale: 'en',
  localePrefix: "always"
});

export function middleware(request: NextRequest) {
  // 排除 socket.io 请求
  if (request.nextUrl.pathname.startsWith('/socket.io')) {
    return;
  }

  const path = request.nextUrl.pathname;

  if (path.startsWith('/admin')) {
    const token = request.cookies.get('auth_token')?.value;
    const isLoggedIn = token && verifyToken(token);
    if (!isLoggedIn) {
      console.log('Not authenticated');
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // 排除 socket.io 和其他不需要国际化的路径
    '/((?!api|_next|socket.io|.*\\..*).*)',
    '/admin/:path*',
  ],
};