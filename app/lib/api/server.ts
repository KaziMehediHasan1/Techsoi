import {} from "node-fetch"
interface typeOfArguments {
  url: string;
  option: any;
}
export const serverApiFecth = async ({ url, options }: typeOfArguments) => {
  const baseurl = process.env.NODE_SERVER;
  const headers = { "Content-Type": "application/json", ...options.headers };

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
  get: ({ url, options }: typeOfArguments) =>
    serverApiFecth(url, { method: "GET", options }),
};
