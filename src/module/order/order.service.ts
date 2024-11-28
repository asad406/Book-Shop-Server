import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrderIntoDB = async(order:TOrder) => {
    const data = new Order(order)
    const result = await data.save()
    return result
}

export const OrderService = {
    createOrderIntoDB
}