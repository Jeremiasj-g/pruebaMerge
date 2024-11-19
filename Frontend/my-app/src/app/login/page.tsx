import Image from "next/image";
import LoginForm from "./login-form";
import {signIn, useSession, signOut} from 'next-auth/react'


export default async function Page() {
  return (
        <main className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md p-6 bg-white rounded-lg ">
    <LoginForm />
  </div>
</main>
  );
}