const BASE_URL = import.meta.env.VITE_BASE_URL 

function http(url , opts={}){
    const header = {}
    if(opts.token){
        header.Authorezation = "Baerer " + opts.token 
    }
    return fetch(BASE_URL + url,{
        method: opts.method || "GET"
    })
}

export default http;