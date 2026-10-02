import sequelize from "../conf/sequelizeConnection.ts";
import { DataTypes, Model } from "sequelize";


const User = sequelize.define('User', {
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
});

export default User;