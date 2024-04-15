import {ProductModel} from '../models'

export const productService = {
  getAll: async()=>{
    return await ProductModel.find();
  },

  create: async(entity: object)=>{
    return await ProductModel.create(entity);
  },

  update: async(id:string, body:object)=>{
    return await ProductModel.findByIdAndUpdate(id, body);
  },

  delete: async(id:string)=>{
    return await ProductModel.findByIdAndDelete(id);
  }
}