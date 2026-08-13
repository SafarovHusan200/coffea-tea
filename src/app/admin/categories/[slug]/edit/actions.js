"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { authFetch } from "@/lib/auth";

export async function updateCategoryAction(formData) {
  const slug = formData.get("slug");
  const name = formData.get("name");
  const image_url = formData.get("image_url");

  const res = await authFetch(`/categories/${slug}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, image_url: image_url || null }),
  });

  if (!res.ok) {
    redirect(`/admin/categories/${slug}/edit?error=1`);
  }

  revalidatePath("/admin/categories");
  revalidatePath("/");
  redirect("/admin/categories");
}
