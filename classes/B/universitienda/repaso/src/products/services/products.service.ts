import { client as api } from "../../conf/axios"
import type { Product } from "../types/Product";

export const getProducts = async ({page=1, limit=10}) =>{
    try {
       const response = await api.get<Product[]>('/products', {params:{page, limit}});
       if (response.status !==200) {
         return null;
       }
       return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getProductsbyId = async (id:number) =>{
    try {
        const response = await api.get<Product>(`/products/${id}`);
        if (response.status !==200) {
         return null;
       }
       return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}