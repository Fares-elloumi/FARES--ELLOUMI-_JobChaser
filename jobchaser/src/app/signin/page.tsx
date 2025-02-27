"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
type FormData = {
  name: string,
  email:string,
  password: string
}
export default function SignInPage() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Inloggning:", data);
  };

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Logga in</h1>
            <input {...register("email")} type="email" placeholder="E-post" required />
            <input {...register("password")} type="password" placeholder="Lösenord" required />
            <button type="submit">Logga in</button>
            <p>Har du inget konto? <Link href="/signup" className="text-blue-500 underline hover:text-blue-600 focus:text-blue-500 active:text-blue-500 visited:text-blue-500">Registrera dig här</Link></p>
        </form>
        
    </div>
  );
}