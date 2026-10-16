import { Model, DataTypes } from "sequelize";
import sequelizeConnection from "../conf/sequelize.connection.ts";

const sequelize = sequelizeConnection.getSequelize();


interface IProduct extends Model {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    imageUrl: string,
    //TODO: add categoryId and brandId
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date
}

const Product = sequelize.define<IProduct>(
    "Product",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type:  DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,   
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    { timestamps: true },
);

export default Product;
