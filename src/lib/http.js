
// const BASE_URL = import.meta.env.VITE_BASE_URL || "https://ghifar-backend.camps.fahrul.id"
const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8888"


async function http(url, body, opts = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    ...(opts.isForm ? {} : { "Content-Type": "application/json" }),
    ...(token && token.split(".").length === 3 && {
      Authorization: "Bearer " + token,
    }),
  };

  const res = await fetch(BASE_URL + url, {
    method: opts.method || "GET",
    body: opts.method === "GET" ? undefined : body,
    headers,
  });

  const text = await res.text();

  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch (err) {
    return err
    // console.error("Response bukan JSON:", text);
  }

  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login";
    return;
  }

  if (!res.ok) {
    throw new Error(data?.message || "Failed to fetch");
  }

  return data;
}
export default http;