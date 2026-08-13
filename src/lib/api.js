const API_URL = process.env.API_URL || "http://10.20.6.30:1212";

async function apiFetch(path, { params, allow404 = false, ...init } = {}) {
  const url = new URL(`/api${path}`, API_URL);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, value);
      }
    }
  }

  const res = await fetch(url, {
    ...init,
    next: { revalidate: 60, ...(init.next || {}) },
  });

  if (res.status === 404 && allow404) return null;

  if (!res.ok) {
    throw new Error(`API request to ${url} failed with ${res.status}`);
  }

  return res.json();
}

export function getCategories() {
  return apiFetch("/categories/");
}

export function getCategory(slug) {
  return apiFetch(`/categories/${slug}/`, { allow404: true });
}

export function getProducts({
  categorySlug,
  limit,
  offset,
  priceMin,
  priceMax,
  isAvailable,
  search,
  ordering,
} = {}) {
  return apiFetch("/products/", {
    params: {
      category_slug: categorySlug,
      limit,
      offset,
      price_min: priceMin,
      price_max: priceMax,
      is_available: isAvailable,
      search,
      ordering,
    },
  });
}

export function getTopProducts(limit) {
  return apiFetch("/products/top/", { params: { limit } });
}

export function getProduct(slug) {
  return apiFetch(`/products/${slug}/`, { allow404: true });
}
