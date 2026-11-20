import { client } from "../../conf/axios"
import type { PaginationProducts, Product } from "../types/Product";

export const getProducts = async ({limit=10,page=1 }) =>{
    try {
       const response = await client.get<PaginationProducts>('/products', {params: {page, limit}});
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
        const response = await client.get<Product>(`/products/${id}`);
        if (response.status !==200) {
         return null;
       }
       return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}