import sequelize from "../conf/sequelizeConnection.ts";
import { DataTypes, Model } from "sequelize";

// class MyClass<T>{
//     public suma(a:T,b:T){
//         return a+b;
//     }
// }

// const stringClass = new MyClass<string>();
// const numberClass = new MyClass<number>();
interface IUser extends Model{
    id:number;
    name:string;
    lastName: string;
    email:string;
    password:string;
    age:number;
    role: 'admin' | 'costumer';
    isActive:boolean
}

const User = sequelize.define<IUser>('User', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    role:{
     type:DataTypes.ENUM('admin','costumer'),
     defaultValue: 'costumer'
    },
    age:{
        type: DataTypes.TINYINT,
        allowNull: false,
    },
    isActive: {
        type:DataTypes.BOOLEAN,
        allowNull: false
    }
}, {timestamps: true});

export default User;