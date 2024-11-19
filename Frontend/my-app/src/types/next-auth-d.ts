import type { DefaultSession } from "@auth/core/types";

declare module "next-auth" {
  interface Session {
    user: {
      userId: string;
      role: string;
      email: string;
      username: string;
    } & DefaultSession["user"];
  }

  interface User {
    role: string;
    username: string;
  }
}

declare module "next-auth" {
  interface JWT {
    id: string;
    role: string;
    username: string;
  }
}
