import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
   try{
    const body = req.body
    const data = await OrderService.createOrderIntoDB(body)
    res.status(200).json({
        message: "Order created successfully",
        success: true,
        data
    })
   }catch(error) {
    res.status(404).json({
        message: "Something wen wrong",
        success: false
    })
   }
}
const totalRevenue = async (req: Request, res: Response) => {
   try{
    const data = await OrderService.calculateTotalRevenue()
    res.status(200).json({
        message: "Total Revenue calculate successfully",
        success: true,
        data
    })
   }catch(error) {
    res.status(404).json({
        message: "Something wen wrong",
        success: false
    })
   }
}

export const OrderController = {
    createOrder,
    totalRevenue
}