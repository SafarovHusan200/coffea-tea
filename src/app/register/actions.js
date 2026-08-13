"use server";

import { redirect } from "next/navigation";

const API_URL = process.env.API_URL || "http://10.20.6.30:1212";

export async function registerAction(formData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const registration_secret = formData.get("registration_secret");

  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password, registration_secret }),
    cache: "no-store",
  });

  if (!res.ok) {
    redirect("/register?error=1");
  }

  redirect("/login?registered=1");
}
