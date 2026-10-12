export class UserResponseDTO{
    private constructor(
        private id:number,
        private fullName:string,
        private email:string
    ){}

    public static create(obj:unknown){
        if(!obj || typeof obj !=='object'){
            throw new Error('invalid data')
        } 
        const {name, lastName, id, email } = obj as Record<string, unknown>;
        if (!name || typeof name!=='string' || !name.trim()) {
            throw new Error('name is required');
        }
        if (!lastName || typeof lastName!=='string' || !lastName.trim()) {
            throw new Error('last name is required');
        }
        if (!id || typeof id!=='number' || id<0) {
            throw new Error('age is required');
        }
        if (!email || typeof email!=='string' || !email.trim() || 
        !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        .test(email)) {
            throw new Error('email is required');
        }

        return new UserResponseDTO(id,`${name} ${lastName}`,email);
    }


}