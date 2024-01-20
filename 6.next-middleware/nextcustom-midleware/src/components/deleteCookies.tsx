'use server'
 
import { cookies } from 'next/headers'

const deleteCookies = () => {
  cookies().delete('email')
  cookies().delete('token')
  cookies().delete('role')
}

export default deleteCookies