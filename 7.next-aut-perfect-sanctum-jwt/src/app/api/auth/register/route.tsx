import axios from 'axios';
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, password, confirm_password } = await request.json()
    await axios.post('http://127.0.0.1:8000/api/register', { name, email, password, confirm_password })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log({ name, email, password, confirm_password })
  } catch (e) {
    console.log({ e })
  }
  return NextResponse.json({ message: 'success' });
}
