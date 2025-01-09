import { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';
import createMiddleware from 'next-intl/middleware';
import { appConfig } from "./lib/appConfig";

const intlMiddleware = createMiddleware({
  // 支持的所有语言列表
  locales: appConfig.i18n.locales,
 
  // 默认语言
  defaultLocale: appConfig.i18n.defaultLocale,
  localePrefix: "as-needed",
});

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // 仅对 /admin 路由检查身份验证
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
    "/((?!api|_next|.*\\..*).*)",
    '/admin/:path*',
  ],
};