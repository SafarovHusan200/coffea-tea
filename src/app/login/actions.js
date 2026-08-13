"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cookieOptions } from "@/lib/auth";

const API_URL = process.env.API_URL || "http://10.20.6.30:1212";

export async function loginAction(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const body = new URLSearchParams();
  body.set("username", username);
  body.set("password", password);

  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!res.ok) {
    redirect("/login?error=1");
  }

  const tokens = await res.json();
  const cookieStore = await cookies();
  cookieStore.set("access_token", tokens.access_token, cookieOptions(60 * 60));
  cookieStore.set(
    "refresh_token",
    tokens.refresh_token,
    cookieOptions(60 * 60 * 24 * 30),
  );

  redirect("/admin");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("access_token");
  cookieStore.delete("refresh_token");
  redirect("/login");
}
