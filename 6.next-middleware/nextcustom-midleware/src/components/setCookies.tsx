'use server'
import { cookies } from 'next/headers'

const setCookies = (Props:any) => {
  cookies().set('role', Props.role)
  cookies().set('token', Props.token)
}

export default setCookies