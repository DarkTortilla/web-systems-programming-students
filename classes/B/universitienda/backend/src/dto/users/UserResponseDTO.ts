export class UserResponseDTO{

    private constructor(private fullName:string,private email:string, private id:number){}


    public static create(obj: unknown){
        if(!obj || typeof obj !=='object'){
            throw new Error('data is required');
        }

        const { name, lastName, email, id } = obj as Record<string, unknown>;
        
        if (!name || typeof name !=='string' || !name.trim()) {
            throw new Error('name is required');
        }
        if (!lastName || typeof lastName !=='string' || !lastName.trim()) {
            throw new Error('last name is required');
        }
        if(!id || typeof id !== 'number' || id<0 ){
            throw new Error('invalid format for age');
        }
        if (!email || typeof email !=='string' || /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(email) ) {
            throw new Error('invalid format for email');
        }

        return new UserResponseDTO( `${name} ${lastName}` ,email, id);

    }
}