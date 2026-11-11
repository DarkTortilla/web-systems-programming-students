import { DataTypes, type Model } from "sequelize";
import sequelizeConnection from '../conf/sequelize.connection.ts'

const sequelize = sequelizeConnection.getSequelize()

interface CategoryI extends Model{
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date
};


const Category = sequelize.define<CategoryI>(
    'Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull:false
    },
    isActive: {
        type:DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {timestamps: true});

export default Category;