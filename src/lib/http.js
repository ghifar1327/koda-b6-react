
// const BASE_URL = import.meta.env.VITE_BASE_URL || "https://ghifar-backend.camps.fahrul.id"
const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8888"


async function http(url, body, opts = {}) {
  const token = localStorage.getItem("token")
  
  const headers = {
    "Content-Type": "application/json",
    ...(token && token.split(".").length === 3 && {
      Authorization: "Bearer " + token,
    }),
  }

  const res = await fetch(BASE_URL + url, {
    method: opts.method || "GET",
    body: opts.method === "GET" ? undefined : body,
    headers,
  })

  const data = await res.json()

    if (res.status === 401) {
    // hapus token lama
    localStorage.removeItem("token")
    // arahkan ke login
    window.location.href = "/login"
    return
  }
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch")
  }

  return data
}

export default http;