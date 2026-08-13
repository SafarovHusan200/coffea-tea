"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { authFetch } from "@/lib/auth";

export async function updateProductAction(formData) {
  const slug = formData.get("slug");
  const title = formData.get("title");
  const price = formData.get("price");
  const old_price = formData.get("old_price");
  const category_id = formData.get("category_id");
  const is_available = formData.get("is_available");
  const description = formData.get("description");

  const res = await authFetch(`/products/${slug}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      price,
      old_price: old_price || null,
      category_id: category_id ? Number(category_id) : null,
      is_available: is_available === "true",
      description: description ?? "",
    }),
  });

  if (!res.ok) {
    redirect(`/admin/products/${slug}/edit?error=1`);
  }

  revalidatePath("/admin");
  revalidatePath("/admin/categories");
  revalidatePath("/");
  redirect("/admin");
}
