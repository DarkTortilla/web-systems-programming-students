export class CreateProductDTO{
    private constructor(
        private name: string, 
        private descrition: string, 
        private price: number,
        private stock: number,
        private imageUrl?: string
    ){}

    public static create(obj: unknown){
        if(!obj){
            throw new Error('data cannot be empty');
        }

        if (typeof obj !=='object') {
            throw new Error('invalid data');
        }

        const {name, description, price, stock, imageUrl} = obj as Record<string, unknown>;

        if (!name || typeof name !=='string' || !name.trim()) {
            throw new Error('name is required');
        }
        if (!description || typeof description !=='string' || !description.trim()) {
            throw new Error('name is required');
        }

        if (!price || typeof price !=='number') {
            throw new Error('price is required');
        }
        if (price<0) {
            throw new Error('price should be greater that 0');
        }
        if (!stock || typeof stock !=='number') {
            throw new Error('price is required');
        }
        if (stock<0) {
            throw new Error('price should be greater that 0');
        }
        

        return new CreateProductDTO(name, description, price, stock, imageUrl)
    }

    

}
