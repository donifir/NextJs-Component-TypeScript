import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import deleteCookies from './components/deleteCookies'

export async function middleware(request: NextRequest) {

  const response = NextResponse.next()
  let token =await request.cookies.get('token')

  const responseApi = await fetch('http://127.0.0.1:8000/api/cek-login', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token?.value}` }
  })

  const newResponseApi = await responseApi.json();
  console.log(newResponseApi.data, 'ini cek login')
  if (newResponseApi.data == null) {
    request.cookies.delete('token')
    request.cookies.delete('role')
    request.cookies.delete('email')
  }

  if ( token?.value ==null && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/login', request.url))
  }


  return response
}