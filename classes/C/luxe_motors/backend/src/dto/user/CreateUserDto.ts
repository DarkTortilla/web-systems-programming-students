import type { ucs2 } from "node:punycode";

export class CreateUserDTO{
    private name:string;
    private lastName:string;
    private age:number;
    private email:string;
    private password: string;

    private constructor(
        name:string, 
        lastName:string, 
        age:number, 
        email:string, 
        password:string){
            this.name= name;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
            this.password = password;
    }


    public static create(obj:unknown){

        if (!obj) {
            throw new Error('user cannot be empty');
        }

        if (typeof obj !=='object') {
            throw new Error('user must be an object');
        }
      
        const {name, lastName, age, email, password } = obj as Record<string, unknown>;

        if (!name || typeof name!=='string' || !name.trim()) {
            throw new Error('name is required');
        }
        if (!lastName || typeof lastName!=='string' || !lastName.trim()) {
            throw new Error('last name is required');
        }
        if (!age || typeof age!=='number' || age<0 || age>100) {
            throw new Error('age is required');
        }
        if (!password || typeof password!=='string' || !password.trim() || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password)) {
            throw new Error('password is required');
        }
        if (!email || typeof email!=='string' || !email.trim() || 
        !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        .test(email) ) {
            throw new Error('email is required');
        }




        return new CreateUserDTO(name, lastName, age, email, password);
    }

}