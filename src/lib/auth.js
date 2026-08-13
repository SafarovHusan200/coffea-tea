import { cookies } from "next/headers";

const API_URL = process.env.API_URL || "http://10.20.6.30:1212";

export function cookieOptions(maxAge) {
  return {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge,
  };
}

export async function isLoggedIn() {
  const cookieStore = await cookies();
  return Boolean(cookieStore.get("access_token")?.value);
}

export async function authFetch(path, init = {}) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const send = (token) =>
    fetch(`${API_URL}/api${path}`, {
      ...init,
      headers: {
        ...(init.headers || {}),
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

  let res = await send(accessToken);

  if (res.status === 401) {
    const refreshToken = cookieStore.get("refresh_token")?.value;
    if (refreshToken) {
      const refreshRes = await fetch(`${API_URL}/api/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: refreshToken }),
        cache: "no-store",
      });

      if (refreshRes.ok) {
        const tokens = await refreshRes.json();
        cookieStore.set(
          "access_token",
          tokens.access_token,
          cookieOptions(60 * 60),
        );
        cookieStore.set(
          "refresh_token",
          tokens.refresh_token,
          cookieOptions(60 * 60 * 24 * 30),
        );
        res = await send(tokens.access_token);
      }
    }
  }

  return res;
}
