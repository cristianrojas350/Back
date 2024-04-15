import {OrderModel} from '../models'

export const orderService = {
  getAll: async()=>{
    return await OrderModel.find();
  },

  create: async(entity: object)=>{
    return await OrderModel.create(entity);
  },

  update: async(id:string, body:object)=>{
    return await OrderModel.findByIdAndUpdate(id, body);
  },

  delete: async(id:string)=>{
    return await OrderModel.findByIdAndDelete(id);
  }
}