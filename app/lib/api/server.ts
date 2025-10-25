import config from "@/app/config";

export interface FetchArgs {
  url: string;
  options?: RequestInit;
}

export const serverApiFetch = async ({ url, options }: FetchArgs) => {

  const baseurl = config.serverURL;
  const headers = { "Content-Type": "application/json", ...options?.headers };
  try {
    const res = await fetch(`${baseurl}${url}`, {
      headers,
      cache: "no-store",
      ...options,
    }); 

    if (!res.ok) {
      const msg = await res.text();
      throw new Error(`API ${res.status}: ${msg || res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.error(
      "[serverApi error]",
      err instanceof Error ? err.message : String(err)
    );
    throw err;
  }

};

export const server = {
  get: (url: string, options?: RequestInit) =>
    serverApiFetch({ url, options: { ...options, method: "GET" } }),

  post: (url: string, body?: any, options?: RequestInit) =>
    serverApiFetch({
      url,
      options: {
        method: "POST",
        body: JSON.stringify(body),
        ...options,
      },
    }),

  put: (url: string, body?: any, options?: RequestInit) =>
    serverApiFetch({
      url,
      options: {
        method: "PUT",
        body: JSON.stringify(body),
        ...options,
      },
    }),

  patch: (url: string, body?: any, options?: RequestInit) =>
    serverApiFetch({
      url,
      options: {
        method: "PATCH",
        body: JSON.stringify(body),
        ...options,
      },
    }),

  delete: (url: string, options?: RequestInit) =>
    serverApiFetch({ url, options: { ...options, method: "DELETE" } }),
};
