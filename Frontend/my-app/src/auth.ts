import NextAuth from "next-auth";
import { getUserByMail, login } from "@/actions/authActions";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        try {
          const response = await login({ email, password });
          if (response.error) {
            throw new Error(response.error);
          }
          if (response.email) {
            const user = await getUserByMail(email);
            if (user) {
              return {
                id: user.userId,
                username: user.username,
                email: user.email,
                role: user.role,
              };
            }
          }
        } catch (error) {
          throw new Error((error as Error).message);
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.role = user.role as string;
        token.username = user.username as string;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        userId: token.id as string,
        role: token.role as string,
        username: token.username as string,
      };
      return session;
    },
  },
};

const { handlers, signIn, signOut, auth } = NextAuth(authOptions);

export { handlers, signIn, signOut, auth };