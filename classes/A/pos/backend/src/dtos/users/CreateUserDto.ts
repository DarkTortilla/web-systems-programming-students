export class CreateUserDTO{
   private name:string; 
   private lastName:string; 
   private email:string; 
   private password:string;
   private age:number;

   private constructor(
    name:string, 
    lastName:string, 
    email:string, 
    password:string, 
    age:number){
        this.age= age;
        this.email = email;
        this.lastName = lastName;
        this.name =name;
        this.password =password;
    }


    public static create(obj:unknown){
        if(!obj ||  typeof obj !=='object'){
            throw new Error('user data is required');
        }
        const { name, lastName, email, password, age }
         = obj as Record<string, unknown>;
         if(!name || typeof name !=='string' || !name.trim()){
            throw new Error('name is required');
         }
         if(!lastName || typeof lastName !=='string' || !lastName.trim()){
            throw new Error('last name is required');
         }
         if (!age || typeof age!=='number' || age<0 || age>100) {
            throw new Error('age is required');
         }
         if(!email || typeof email !=='string' || 
            //name@domain
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(email)){
            throw new Error('email is required');
         }
         if(!password || typeof password!=='string'|| 
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password)){
                throw new Error('password is required');
            }
        

        return new CreateUserDTO(name, lastName, email, password, age );
    }
}