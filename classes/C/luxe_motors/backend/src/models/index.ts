import User from "./User.ts";
import Product from "./Product.ts";
import Category from "./Category.ts";

Category.hasMany(Product, {foreignKey:'categoryId'});
Product.belongsTo(Category, {foreignKey: 'categoryId'})

 
export {User, Product, Category};