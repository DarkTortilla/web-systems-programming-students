import { client } from "../../conf/axios"
import type { Product } from "../types/Product";

const getProducts = async (page:number=1, limit:number =10) =>{
    try {
       const response = await client.get<Product[]>('/products');
       if (response.status !==200) {
         return null;
       }
       return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
const getProductsbyId = async (id:number) =>{
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