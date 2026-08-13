"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { authFetch } from "@/lib/auth";

export async function createProductAction(formData) {
  const title = formData.get("title");
  const sku = formData.get("sku");
  const price = formData.get("price");
  const old_price = formData.get("old_price");
  const category_id = formData.get("category_id");
  const is_available = formData.get("is_available");
  const description = formData.get("description");
  const image_url = formData.get("image_url");
  const image_file = formData.get("image_file");

  const res = await authFetch("/products/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      sku,
      price,
      old_price: old_price || null,
      category_id: category_id ? Number(category_id) : null,
      is_available: is_available !== "false",
      description: description || "",
    }),
  });

  if (!res.ok) {
    redirect("/admin/products/new?error=1");
  }

  const product = await res.json();

  if (image_file && image_file.size > 0) {
    const uploadForm = new FormData();
    uploadForm.append("file", image_file);
    await authFetch(`/products/${product.slug}/images/upload/`, {
      method: "POST",
      body: uploadForm,
    });
  } else if (image_url) {
    await authFetch(`/products/${product.slug}/images/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image_url }),
    });
  }

  revalidatePath("/admin");
  if (product.category?.slug) {
    revalidatePath(`/categories/${product.category.slug}`);
  }
  redirect("/admin");
}
