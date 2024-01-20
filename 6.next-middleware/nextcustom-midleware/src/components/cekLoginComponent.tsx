'use client'
import Cookie from 'js-cookie'

const CekLogin = async ({ children }: { children: React.ReactNode }) => {

  let data = Cookie.get('token') // => 'value'
  console.log(data,' ini adalah jscookie')
  return (
    <div>
      {children}
    </div>
  );
};

export default CekLogin;