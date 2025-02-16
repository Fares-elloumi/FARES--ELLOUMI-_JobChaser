"use client";

import { useForm } from "react-hook-form";

export default function SignInPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Inloggning:", data);
  };

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Logga in</h1>
            <input {...register("email")} type="email" placeholder="E-post" required />
            <input {...register("password")} type="password" placeholder="Lösenord" required />
            <button type="submit">Logga in</button>
        </form>
    </div>
  );
}