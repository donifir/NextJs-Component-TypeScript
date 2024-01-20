import axios from "axios";
import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = nextAuth({
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // console.log({ credentials })

        // axios.post('http://127.0.0.1:8000/api/login', {
        //   email: credentials?.email,
        //   password: credentials?.password
        // })
        //   .then(function (response) {
        //     // console.log(response.data);
        //     return(response.data)
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });


        const headers = new Headers({
          "Content-Type": "application/json",
        })

        const options = {
          method: "POST",
          headers,
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          }),
        }
        try {
          const response = await fetch("http://127.0.0.1:8000/api/login", options)
          if (response.ok) {
            const res = await response.json()
            console.log("response", res)
            return res
          } else {
            console.log("HTTP error! Status:", response.status)
            // Handle non-successful response here, return an appropriate JSON response.
            return { error: "Authentication failed" }
          }
        } catch (error) {
          console.log("Error", error)
        }

        return null;

      }
    })
  ]
})

export { handler as GET, handler as POST };