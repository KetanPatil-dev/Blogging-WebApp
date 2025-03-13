import axios from "axios"

export const BaseUrl="http://localhost:7989 "

export const instance= axios.create({
    baseURL:BaseUrl,
    withCredentials:true
})

export const get=(url,params)=> instance.get(url,params)
export const post=(url,data)=>instance.post(url,data)
export const patch=(url,data)=>instance.patch(url,data)
export const delet_e=(url)=>instance.delete(url);