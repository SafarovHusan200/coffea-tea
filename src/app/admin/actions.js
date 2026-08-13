"use server";

import { revalidatePath } from "next/cache";
import { authFetch } from "@/lib/auth";

export async function deleteCategoryAction(formData) {
  const slug = formData.get("slug");
  await authFetch(`/categories/${slug}/`, { method: "DELETE" });
  revalidatePath("/admin/categories");
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function deleteProductAction(formData) {
  const slug = formData.get("slug");
  await authFetch(`/products/${slug}/`, { method: "DELETE" });
  revalidatePath("/admin");
  revalidatePath("/admin/categories");
  revalidatePath("/");
}
