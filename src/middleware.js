import NextAuth from 'next-auth';
// Create a separate auth.config.js for edge compatibility, or export authConfig from auth.js
// Since we might have database adapters which are not edge-compatible, we'll just check session token.
import { NextResponse } from 'next/server';

export async function middleware(request) {
  const sessionToken = request.cookies.get('authjs.session-token') || request.cookies.get('__Secure-authjs.session-token');
  const pathname = request.nextUrl.pathname;

  // Protected routes
  const isDashboard = pathname.startsWith('/dashboard');
  const isAdmin = pathname.startsWith('/admin');

  if ((isDashboard || isAdmin) && !sessionToken) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }

  // Note: Actual admin role verification will happen in the Server Components
  // since edge middleware cannot easily decode DB-backed session tokens without the adapter.

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};
