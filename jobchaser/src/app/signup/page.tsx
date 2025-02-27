"use client";

import { useForm } from "react-hook-form";
type FormData = {
  name: string,
  email:string,
  password: string
}

export default function SignUpPage() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Registrering:", data);
  };

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Registrera dig</h1>
            <input {...register("name")} type="text" placeholder="Namn" required />
            <input {...register("email")} type="email" placeholder="E-post" required />
            <input {...register("password")} type="password" placeholder="Lösenord" required />
            <button type="submit">Registrera</button>
        </form>
    </div>
  );
}