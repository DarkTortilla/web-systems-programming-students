export class ResponseUserDto{
    
    private constructor(
        private fullName:string,
        private id:number,
        private email:string,
    ){}

    public static create(obj: unknown): ResponseUserDto{
        if(!obj ||  typeof obj !=='object'){
            throw new Error('user data is required');
        }
        const { name, lastName, email, id }
         = obj as Record<string, unknown>;
         if(!name || typeof name !=='string' || !name.trim()){
            throw new Error('name is required');
         }
         if(!lastName || typeof lastName !=='string' || !lastName.trim()){
            throw new Error('last name is required');
         }
         if (!id || typeof id!=='number' || id<0 ) {
            throw new Error('id is required');
         }
         if(!email || typeof email !=='string' || 
            //name@domain
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(email)){
            throw new Error('email is required');
         }
       
         return new ResponseUserDto(`${name} ${lastName}`, id, email);

    }



}