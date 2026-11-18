import { client } from "../../conf/axios";
import type { PayloadProduct, Product } from "../types/Product";

export const getProducts = async () => {
  try {
    const response = await client.get<Product[]>("/products");

    if (response.status === 200) {
      return response.data;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProductById = async (id:number)=>{
    try {
        const response = await client.get<Product>(`/products/${id}`);
        if (response.status ===200) {
            return response.data;
        }

        return null;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const createProduct = async (product:PayloadProduct)=>{
  try {
    const response = await client.post<{message:string}>('/products', product);
    if (response.status===201) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
}