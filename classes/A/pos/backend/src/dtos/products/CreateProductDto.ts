export class CreateProductDTO{
    private constructor
    (
        private name:string,
        private price:number 
    ){

    }
    
    public static create(data:unknown){
        if (!data || typeof data !=='object') {
            throw new Error('product data is required');
        }

        const {name, price} = data as Record<string, unknown>;

        if(typeof name !=='string' || !name.trim()){
            throw new Error('invalid name format'); 
        }
        if (typeof price !=='number') {
            throw new Error('price must be a number');
        }
        if(!price|| price <0){
            throw new Error('price must be greater that 0');
        }
        return new CreateProductDTO(name, price);

    }
}

