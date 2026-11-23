
export type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    imageUrl: string,
    isActive: boolean,
    createdAt: string,
    updatedAt: string
}

export type ProductList ={
    data:Product[],
    limit:number,
    page:number,
    count:number
} 

export type PayloadProduct = Omit<Product, 'id'>;


