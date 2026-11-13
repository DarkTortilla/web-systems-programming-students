import {client} from '../../conf/axios';
import type { Product } from '../types/Product';


export const getProducts = async (page:number =1, limit: number =10)=>{
    try {
        const response = await client.get<Product[]>('/products', {params:{page, limit}});
        if (response.status!==200) {
            //TODO: implement toast service
            return null;
        }
        return response.data;
    } catch (error) {
        console.log(error);
        //TODO: implement toast service
        return null;
    }
}

export const getProductsById = async (id: number) => {
    try {
        const response = await client.get<Product>(`/products/${id}`);
        if (response.status!==200) {
            //TODO: implement toast service
            return null;
        }
        return response.data;
    } catch (error) {
        console.log(error);
        //TODO: implement toast service
        return null;
    }
}

