import {Response , Request} from 'express'
import {productService} from '../services'

export const productController = {
    getAllTask: async(req:Request, res:Response)=>{
      try {
        const data = await productService.getAll();
        return res.json(data);
      } catch (error:any) {
        res.status(400).json({
          message: error.message
        })
      }
    },
  
    create: async(req:Request, res:Response)=>{
      try {
        const data = await productService.create(req.body);
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
        const data = await productService.update(id, req.body);
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
        const data = await productService.delete(id);
        return res.json(data);
      } catch (error:any) {
        res.status(400).json({
          message: error.message
        })
      }
    },
  }