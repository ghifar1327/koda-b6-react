// const BASE_URL = import.meta.env.VITE_BASE_URL || "https://ghifar-backend.camps.fahrul.id"
const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8888"


async function http(url, body ,opts={}){
    const headers = {}
    if(opts.token){
        headers.Authorization = "Bearer "+opts.token
    }
    const res = await fetch(BASE_URL + url, {
        method: opts.method || "GET",
        body,
        headers
    })
    const data = await res.json()
    return data
}

export default http;