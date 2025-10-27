export interface FetchArgs extends RequestInit {
  url: string;
}

export async function serverApiFetch<T>({
  url,
  ...options
}: FetchArgs): Promise<T> {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  try {
    const res = await fetch(`${baseUrl}${url}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!res.ok) {
      const msg = await res.text();
      throw new Error(`API ${res.status}: ${msg || res.statusText}`);
    }

    return (await res.json()) as T;
  } catch (err) {
    console.error(
      "[serverApi error]",
      err instanceof Error ? err.message : String(err)
    );
    throw err;
  }
}

// Reusable method wrappers
export const server = {
  get: async <T>(url: string, options?: RequestInit) =>
    serverApiFetch<T>({ url, method: "GET", ...options }),

  post: async <T, B extends object>(
    url: string,
    body: B,
    options?: RequestInit
  ) =>
    serverApiFetch<T>({
      url,
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    }),

  put: async <T, B extends object>(
    url: string,
    body: B,
    options?: RequestInit
  ) =>
    serverApiFetch<T>({
      url,
      method: "PUT",
      body: JSON.stringify(body),
      ...options,
    }),

  patch: async <T, B extends object>(
    url: string,
    body: B,
    options?: RequestInit
  ) =>
    serverApiFetch<T>({
      url,
      method: "PATCH",
      body: JSON.stringify(body),
      ...options,
    }),

  delete: async <T>(url: string, options?: RequestInit) =>
    serverApiFetch<T>({ url, method: "DELETE", ...options }),
};
