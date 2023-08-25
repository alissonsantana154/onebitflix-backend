import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Category {
  id: number,
  name: string,
  position: number
}

export interface CategoryCreateAttributes extends Optional<Category, 'id'> { }

export interface CategoryInstace extends Model<Category, CategoryCreateAttributes>, Category { }

export const Category = sequelize.define<CategoryInstace, Category>('Category', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  position: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER
  }
})