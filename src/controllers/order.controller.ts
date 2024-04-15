import {Response , Request} from 'express'
import {orderService} from '../services'

export const orderController = {
    getAllTask: async(req:Request, res:Response)=>{
      try {
        const data = await orderService.getAll();
        return res.json(data);
      } catch (error:any) {
        res.status(400).json({
          message: error.message
        })
      }
    },
  
    create: async(req:Request, res:Response)=>{
      try {
        const data = await orderService.create(req.body);
        return res.json(data);
      } catch (error:any) {
        res.status(400).json({
          message: error.message
        })
      }
    },
  
    update: async(req:Request, res:Response)=>{
      try {
        const {id} = req.params;
        const data = await orderService.update(id, req.body);
        return res.json(data);
      } catch (error:any) {
        res.status(400).json({
          message: error.message
        })
      }
    },
  
    delete: async(req:Request, res:Response)=>{
      try {
        const {id} = req.params;
        const data = await orderService.delete(id);
        return res.json(data);
      } catch (error:any) {
        res.status(400).json({
          message: error.message
        })
      }
    },
  }