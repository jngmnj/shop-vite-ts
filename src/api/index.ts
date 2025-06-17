import { API_BASE_URL, PRODUCTS_ENDPOINT } from '@constants/api';

export async function fetchJSON(url: string, options: RequestInit = {}) {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
}

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

export interface GetProductsResponse {
  products: Product[];
  total: number;
}

export async function getProducts({
  skip = 0,
  limit = 12,
}: {
  skip?: number;
  limit?: number;
}): Promise<GetProductsResponse> {
  const url = `${API_BASE_URL}${PRODUCTS_ENDPOINT}?limit=${limit}&skip=${skip}&select=title,price,images`;
  return fetchJSON(url); // 내부에서 fetch 호출
}
