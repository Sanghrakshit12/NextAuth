import CredentialsProvider from "next-auth/providers/credentials";
export const Next_Auth_Config={
    providers: [
      CredentialsProvider({
        name: "Email",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "email" },
          password: {
            label: "password",
            type: "password",
            placeholder: "password"
          },
        },
        async authorize(credentials: any) {
          console.log(credentials);
  
          return { id: "1", name: "Sanghrakshit", email: "xxx.com" };
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      // jwt: ({ token }:any) => {
      //   console.log (token)
      //   return token;
      // },
      session: ({ session, token, user }: any) => {
        session.user.id = token.sub;
        return session;
      },
    }
  }