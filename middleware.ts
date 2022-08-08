import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    req.nextUrl.pathname = '/hello/world';
    return NextResponse.rewrite(req.nextUrl);
}

export const config = {
    matcher: '/hello'
}
