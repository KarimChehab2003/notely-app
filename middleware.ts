import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
    const response = NextResponse.next({ request });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
                }
            }
        }
    );

    const {
        data: { user }
    } = await supabase.auth.getUser();

    // Redirect unauthenticated users away from protected routes:
    if (!user && !request.nextUrl.pathname.startsWith('/auth') && !request.nextUrl.pathname.startsWith('/error')) {
        const loginUrl = request.nextUrl.clone();
        loginUrl.pathname = '/auth';
        return NextResponse.redirect(loginUrl);
    }

    return response;
}

export const config = {
    matcher: ["/((?!auth|$|_next/static|_next/image|favicon.ico).*)"],
};
