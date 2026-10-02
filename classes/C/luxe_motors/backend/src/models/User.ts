import { DataTypes, Model } from "sequelize";
import sequelize from "../conf/sequelize.connection.ts";


interface IUser extends Model{
    id: number,
    name: string,
    lastName: string,
    age: number,
    email:string,
    password:string,
    role: 'admin' | 'customer'
    isActive: boolean
}


const User = sequelize.define<IUser>('User',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type:DataTypes.STRING,
            allowNull: false  
        },
        lastName:{
          type:DataTypes.STRING,
          allowNull: false  
        },
        age:{
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,  
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false  
        },
        role:{
            type:DataTypes.ENUM('customer','admin'),
            allowNull: false,
            defaultValue: 'customer'  
        },
        isAcitve: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },
    {
        timestamps: true
    }
);



export default User;

