import { DataTypes, Model } from "sequelize";
import sequelize from "../conf/sequilize.connection.ts";


interface IUser extends Model {
    id:number
}

const User = sequelize.define<IUser>('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type:DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type:DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin','customer'),
        defaultValue: 'customer'
    },
    age: {
        type:DataTypes.SMALLINT,
        allowNull: false
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {timestamps: true });

export default User;